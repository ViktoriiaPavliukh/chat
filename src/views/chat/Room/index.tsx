import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { Link, Box, styled, Checkbox } from "@mui/material";
import Stack from "@mui/material/Stack";

import { Message } from "./components/Message";
import { IState } from "../../../core/store";
import {
  messagesSend,
  messagesReceive,
  messagesRemove,
  messageCurrentDelete,
} from "../../../core/store/messages";
import { MessageModel } from "../../../core/models";
import { FormInput } from "../../../shared/components/FormInput";
import {
  UploadButton,
  SendButton,
  DeleteButton,
} from "../../../shared/components";

const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  bottom: theme.spacing(1),
  left: "0",
  right: "0",
}));

export function ChatRoom({ messages, send, remove, deleteCurrent }: IProps) {
  const [text, setText] = useState("");
  const { roomId } = useParams();

  const sendHandler = () => {
    if (text) {
      send(text);
      setText("");
    }
  };
  const onDelete = () => {
    remove(text);
  };

  const messageDelete = (text: string) => {
    deleteCurrent(text);
  };

  return (
    <Container>
      <Box>
        <Link href="..">Back</Link>
      </Box>
      Room ID: {roomId}
      {messages.map((message, index) => (
        <Message
          key={index}
          itsMe={message.fromUserId === "1111"}
          avatar=""
          messages={[message.text]}
          onDelete={messageDelete}
          // onDelete={() => console.log(message.id)}
        />
      ))}
      <Stack direction="row" spacing={2}>
        {" "}
        <UploadButton />
        <FormWrapper>
          <FormInput value={text} onChange={(e) => setText(e.target.value)} />
          <SendButton onClick={sendHandler} />
          <DeleteButton onClick={onDelete} />
        </FormWrapper>
      </Stack>
    </Container>
  );
}

const mapState = (state: IState) => ({
  messages: state.messages.list,
});

const mapDispatch = (d: any) => ({
  send: (text: string) =>
    d((dispatch: any) => {
      dispatch(messagesSend(text));

      setTimeout(() => {
        dispatch(messagesReceive(faker.lorem.text()));
      }, 1000);
      setTimeout(() => {
        dispatch(messagesReceive(faker.lorem.text()));
      }, 2000);
    }),

  remove: (text: string) =>
    d((dispatch: any) => {
      dispatch(messagesRemove(text));
    }),

  deleteCurrent: (text: string) =>
    d((dispatch: any) => {
      dispatch(messageCurrentDelete(text));
    }),
});

export default connect(mapState, mapDispatch)(ChatRoom);

interface IProps {
  messages: MessageModel[];
  send: (text: string) => void;
  remove: (text: string) => void;
  deleteCurrent: (text: string) => void;
}
