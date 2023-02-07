import { createAction, createPayloadActionWith, IWSEmit } from "../_utils";

// Connection actions
export const socketsConnect = createAction("ws.connect");
export const socketsDisconnect = createAction("ws.disconnect");

// Emit actions
export const socketsEmit = createPayloadActionWith(
  "ws.emit",
  (type: string, data: any): IWSEmit => ({ type, data })
);

// //WebSocket connection
// export const messagesWSConnect = createAction("messages.ws.connect");
// export const messagesWSDisconnect = createAction("messages.ws.disconnect");
// export const messagesWSSend = createPayloadActionWith(
//   "messages.ws.send",
//   (type: string, data: any) => ({ type, data })
// );
