import {
  createAction,
  createPayloadAction,
  createPayloadActionWith,
  createBindAction,
  IWSMessage,
} from "../_utils";
import { WebSocketEvents, IWebSocketServerMessage } from "../_utils/types";

// Connection actions
export const socketsConnect = createPayloadAction("ws.connect");
export const socketsDisconnect = createAction("ws.disconnect");

// Actions
const wsMessageCreator = (type: string, data: any): IWSMessage => ({
  type,
  data,
});

export const socketsEmit = createPayloadActionWith("ws.emit", wsMessageCreator);
export const socketsReceive = createPayloadActionWith(
  "ws.receive",
  wsMessageCreator
);

// Request Entity
// export const socketsRequestEntity = createPayloadActionWith();

export const messagesSend = createBindAction(
  socketsEmit,
  WebSocketEvents.ToServerMessage
);

export const messagesReceive =
  createPayloadAction<IWebSocketServerMessage>("messages.receive");
export const messagesReceiveLast = createPayloadAction("messages.receiveLast");

export const messagesGetLastMessages = createPayloadAction("");

export const messagesSetCurrentChat = createPayloadAction<string>(
  "messages.selectChat"
);

// Emit actions
// export const socketsEmit = createPayloadActionWith(
//   "ws.emit",
//   (type: string, data: any): IWSEmit => ({ type, data })
// );

// //WebSocket connection
// export const messagesWSConnect = createAction("messages.ws.connect");
// export const messagesWSDisconnect = createAction("messages.ws.disconnect");
// export const messagesWSSend = createPayloadActionWith(
//   "messages.ws.send",
//   (type: string, data: any) => ({ type, data })
// );
