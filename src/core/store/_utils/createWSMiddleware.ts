import { Middleware, Store } from "redux";
import { io, Socket } from "socket.io-client";

import {
  IAction,
  IActionType,
  IPayloadActionCreator,
  IPayloadAction,
} from "./types";

function isActionCreator(handler: IWSHandler): handler is IWSActionHandler {
  return typeof handler === "function" && "TYPE" in handler;
}

const socket = io();

export function createWSMiddleware({
  connectionUrl,
  actions,
  handlers,
}: IWSMiddlewareParams): Middleware {
  return (store) => {
    let socket: Socket | null;

    function connect() {
      if (socket) {
        disconnect();
      }

      socket = io(connectionUrl);
    }

    function disconnect() {
      if (socket) {
        socket.disconnect();
      }
      socket = null;
    }

    function bindHandlers() {
      if (!socket) {
        return;
      }

      // Object.entries(handlers).map(([handlerName, handler]) => {
      //   socket.on(handlerName, (data) => {
      //     if (isActionCreator(handler)) {
      //       store.dispatch(handler(data));
      //     } else {
      //       handler(store as Store, data);
      //     }
      //   });
      // });
    }

    // function emitMessage(type: string, data: any) {
    //   socket?.emit(type, data);
    // }

    return (next) => (action) => {
      if (action.type === actions.CONNECT.TYPE) {
        connect();
        bindHandlers();
      }

      if (action.type === actions.DISCONNECT.TYPE) {
        disconnect();
      }

      // if (action.type === actions.EMIT.TYPE) {
      //   const { wsType, wsData } = action.payload;
      //   emitMessage(wsType, wsData);
      // }

      next(action);
    };
  };
}

export interface IWSEmit {
  type: string;
  data: any;
}

interface IWSMiddlewareParams {
  connectionUrl: string;
  actions: IWSActions;
  handlers: IWSHandlers;
}

// interface IWSActions {
//   CONNECT: ((...args: any) => IAction<string>) & IActionType<string>;
//   DISCONNECT: ((...args: any) => IAction<string>) & IActionType<string>;
//   EMIT: ((...args: any) => IPayloadAction<string, IWSEmit>) &
//     IActionType<string>;
// }
interface IWSActions {
  CONNECT: any;
  DISCONNECT: any;
  EMIT: any;
}

interface IWSHandlers {
  [wsAction: string]: IWSHandler | IWSActionHandler;
}

type IWSHandler = (dispatch: Store, data: any) => void;
type IWSActionHandler = IPayloadActionCreator<string, any>;
// import { Middleware, Dispatch } from "redux";
// import { io, Socket } from "socket.io-client";

// export function createWSMiddleware({
//   connectionUrl,
//   actions,
//   handlers,
// }: ICreateWSMiddlewareParams): Middleware {
//   return (store) => {
//     let socket: Socket | null;

//     function connect() {
//       if (socket) {
//         disconnect();
//       }

//       socket = io(connectionUrl);
//     }

//     function disconnect() {
//       if (socket) {
//         socket.disconnect();
//       }
//       socket = null;
//     }

//     function bindHandlers() {
//       if (!socket) {
//         return;
//       }

//       // Object.entries(handlers).map(([handlerName, handler]) => {
//       //   socket.on(handlerName, (data) => handler(store.dispatch, data));
//       // });
//     }

//     function sendMessage(eventType: string, eventData: any) {
//       if (socket) {
//         socket.send(eventType, eventData);
//       }
//     }

//     return (next) => (action) => {
//       if (action.type === actions.connect) {
//         connect();
//         bindHandlers();
//       }

//       if (action.type === actions.disconnect) {
//         disconnect();
//       }

//       if (action.type === actions.message) {
//         const { eventType, eventData } = action.payload;
//         sendMessage(eventType, eventData);
//       }

//       next(action);
//     };
//   };
// }

// interface ICreateWSMiddlewareParams {
//   connectionUrl: string;
//   actions: IWSActions;
//   handlers: IWSHandlers;
// }

// interface IWSActions {
//   connect: string;
//   disconnect: string;
//   message: string;
// }

// export interface IWSEmit {
//   type: string;
//   data: any;
// }

// interface IWSHandlers {
//   [wsAction: string]: IWSHandler;
// }

// type IWSHandler = (dispatch: Dispatch, data: any) => void;
