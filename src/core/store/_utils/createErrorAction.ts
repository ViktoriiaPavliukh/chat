import { IErrorActionCreator } from "./types";

export function createErrorAction<T extends string, E>(
  type: T
): IErrorActionCreator<T, E> {
  const actionCreator = (error: E) => ({ type, error });
  actionCreator.TYPE = type;

  return actionCreator;
}
// import { Action, ActionType } from "./createAction";

// export interface ErrorAction<T extends string, E> extends Action<T> {
//   error: E;
// }

// export type IActionErrorCreator<T extends string, E> = ((
//   error: E
// ) => ErrorAction<T, E>) &
//   ActionType<T>;

// export function createErrorAction<T extends string, E>(
//   type: T
// ): IActionErrorCreator<T, E> {
//   const actionCreator = (error: E) => ({ type, error });
//   actionCreator.TYPE = type;

//   return actionCreator;
// }
