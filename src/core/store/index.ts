import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";

import messagesMiddleware from "./messages/middleware";
// import usersMiddleware from './users/middleware';

const middlewares = [
  thunk,
  createLogger({ collapsed: true }),
  messagesMiddleware,
  // usersMiddleware,
];

export default createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export type { IState } from "./rootReducer";
