import { WEB_SOCKET_CONNECTION_URL } from "../../constans";
import { WebSocketEvents } from "../../../core/store/_utils/types";

import { createWSMiddleware } from "../_utils";
import { messagesReceive } from "../messages";

import * as actions from "./actions";

export default createWSMiddleware({
  connectionUrl: WEB_SOCKET_CONNECTION_URL,
  actions: {
    CONNECT: actions.socketsConnect,
    DISCONNECT: actions.socketsDisconnect,
    EMIT: actions.socketsEmit,
    RECEIVE: actions.socketsReceive,
  },
  handlers: {
    [WebSocketEvents.ToClientMessage]: messagesReceive,
  },
});
// import { AnyAction, combineReducers } from "redux";
// import { WEB_SOCKET_CONNECTION_URL } from "../../constans";
// import { createWSMiddleware } from "../_utils";
// import * as actions from "./actions";
// import { createMockMessage } from "../../mock";

// export default createWSMiddleware({
//   connectionUrl: WEB_SOCKET_CONNECTION_URL,
//   actions: {
//     CONNECT: actions.socketsConnect,
//     DISCONNECT: actions.socketsDisconnect,
//     EMIT: actions.socketsEmit,
//   },
//   handlers: {
//     // sendServerMessage: (dispatch, data) => {
//     //   const message = createMockMessage({
//     //     text: data,
//     //   });
//     //   dispatch(actions.messagesReceive(message));
//     // },
//   },
// });
