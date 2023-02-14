import { IPayloadActionCreator } from "./types";

export function createPayloadAction<T extends string, P>(
  type: T
): IPayloadActionCreator<T, P> {
  const actionCreator = (payload: P) => ({ type, payload });
  actionCreator.TYPE = type;

  return actionCreator;
}

// import { IPayloadActionCreator } from "../_utils/typesWS";

// export function createPayloadAction<P, T extends string = string>(
//   type: T
// ): IPayloadActionCreator<P, T> {
//   const actionCreator = (payload: P) => ({ type, payload });
//   actionCreator.TYPE = type;
//   actionCreator.toString = () => type;

//   return actionCreator;
// }
