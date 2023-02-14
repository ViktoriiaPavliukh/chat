import {
  createAction,
  createPayloadAction,
  createPayloadActionWith,
} from "../_utils";

export const messagesSend = createPayloadAction("messages.send");
export const messagesRemove = createPayloadAction("messages.remove");
export const messageCurrentDelete = createPayloadAction("message.delete");

export const messagesReceive = createPayloadAction("messages.receive");
export const messagesReceiveLast = createPayloadAction("messages.receiveLast");
export const messagesGetLastMessages = createPayloadAction("");
export const messagesSetCurrentChat = createPayloadAction(
  "messages.selectChat"
);

// export const messagesSetCurrentChat = createPayloadAction<string>(
//   "messages.selectChat"
// ); //for typesWS
