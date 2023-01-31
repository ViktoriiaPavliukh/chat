import * as React from "react";
import { useState } from "react";
import { Link } from "@mui/material";
import Stack from "@mui/material/Stack";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { faker } from "@faker-js/faker";

import { Message } from "./components/Message";
import { IState } from "../../../core/store";
import {
  messagesSend,
  messagesReceive,
  messagesRemove,
} from "../../../core/store/messages";
import { MessageModel } from "../../../core/models";
import { FormInput } from "../../../shared/components/FormInput";
import {
  UploadButton,
  SendButton,
  DeleteButton,
} from "../../../shared/components";
import { setTextRange } from "typescript";

export function ChatRoom({ messages, send, remove }: IProps) {
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

  return (
    <div>
      <div>
        <Link href="..">Back</Link>
      </div>
      Room ID: {roomId}
      {messages.map((message, index) => (
        <Message
          key={index}
          itsMe={message.fromUserId === "1111"}
          avatar=""
          messages={[message.text]}
        />
      ))}
      <Stack direction="row" spacing={2}>
        {" "}
        <UploadButton />
        <FormInput value={text} onChange={(e) => setText(e.target.value)} />
        <SendButton onClick={sendHandler} />
        <DeleteButton onClick={onDelete} />
      </Stack>
    </div>
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
});

export default connect(mapState, mapDispatch)(ChatRoom);

interface IProps {
  messages: MessageModel[];
  send: (text: string) => void;
  remove: (text: string) => void;
}
