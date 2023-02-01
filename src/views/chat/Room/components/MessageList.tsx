import { Paper } from "@mui/material";

import { MessageModel } from "../../../../core/models";

import { Message } from "./Message";

export function MessageList({ list }: any) {
  return (
    <Paper style={{ maxHeight: "500px", overflow: "auto" }}>
      {list.map((message: MessageModel, index: any, onClick: () => void) => (
        <Message
          key={index}
          avatar=""
          messages={[message.text]}
          onClick={onClick}
        />
      ))}
    </Paper>
  );
}
