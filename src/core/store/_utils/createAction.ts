import * as React from "react";

export interface Action<T extends string> {
  type: T;
}

export interface ActionType<T> {
  TYPE: T;
}

export type IActionCreator<T extends string> = (() => Action<T>) &
  ActionType<T>;

export function createAction<T extends string>(type: T): IActionCreator<T> {
  const actionCreator = () => ({ type });
  actionCreator.TYPE = type;

  return actionCreator;
}
