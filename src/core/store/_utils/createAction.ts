import * as React from "react";
import { IActionCreator } from "./types";

export interface Action<T extends string> {
  type: T;
}

export interface ActionType<T> {
  TYPE: T;
}

export function createAction<T extends string>(type: T): IActionCreator<T> {
  const actionCreator = () => ({ type });
  actionCreator.TYPE = type;

  return actionCreator;
}
