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

//WebSocket connection
export const messagesWSConnect = createAction("messages.ws.connect");
export const messagesWSDisconnect = createAction("messages.ws.disconnect");
export const messagesWSSend = createPayloadActionWith(
  "messages.ws.send",
  (type: string, data: any) => ({ type, data })
);
