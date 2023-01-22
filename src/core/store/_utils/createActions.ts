import * as React from "react";
import { IState } from "../../store";

export const selectFeature = (state: IState) => (state as any).feature;

export interface Action<T extends string> {
  type: T;
}

export interface PayloadAction<T extends string, P> extends Action<T> {
  payload: P;
}

export interface ErrorAction<T extends string, E> extends Action<T> {
  error: E;
}

export interface ActionType<T> {
  TYPE: T;
}

export type IActionCreator<T extends string> = (() => Action<T>) &
  ActionType<T>;
export type IActionPayloadCreator<T extends string, P> = ((
  payload: P
) => PayloadAction<T, P>) &
  ActionType<T>;
export type IActionErrorCreator<T extends string, E> = ((
  error: E
) => ErrorAction<T, E>) &
  ActionType<T>;

export function createAction<T extends string>(type: T): IActionCreator<T> {
  const actionCreator = () => ({ type });
  actionCreator.TYPE = type;

  return actionCreator;
}
export function createPayloadAction<T extends string, P>(
  type: T
): IActionPayloadCreator<T, P> {
  const actionCreator = (payload: P) => ({ type, payload });
  actionCreator.TYPE = type;

  return actionCreator;
}

export function createErrorAction<T extends string, E>(
  type: T
): IActionErrorCreator<T, E> {
  const actionCreator = (error: E) => ({ type, error });
  actionCreator.TYPE = type;

  return actionCreator;
}
