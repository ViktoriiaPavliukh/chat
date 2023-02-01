import { createPayloadAction } from "../_utils";

export const messagesSend = createPayloadAction("messages.send");
export const messagesRemove = createPayloadAction("messages.remove");
export const messageCurrentDelete = createPayloadAction("message.delete");

export const messagesReceive = createPayloadAction("messages.receive");
export const messagesReceiveLast = createPayloadAction("messages.receiveLast");

export const messagesGetLastMessages = createPayloadAction("");
