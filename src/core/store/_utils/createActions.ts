import * as React from "react";

export function createAction(type: string) {
  const actionCreator = () => ({ type });
  actionCreator.TYPE = type;

  return actionCreator;
}

export function createPayloadAction<R>(type: string) {
  const actionCreator = (payload: R) => ({ type, payload });
  actionCreator.TYPE = type;

  return actionCreator;
}

export function createErrorAction<E>(type: string) {
  const actionCreator = (error: E) => ({ type, error });
  actionCreator.TYPE = type;

  return actionCreator;
}
