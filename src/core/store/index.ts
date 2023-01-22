import { applyMiddleware, compose, createStore } from "redux";

import rootReducer from "./rootReducer";

import messagesMiddleware from "./messages/middleware";

const middlewares = [messagesMiddleware];

export default createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export type { IState } from "./rootReducer";
