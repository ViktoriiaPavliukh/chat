import { AnyAction } from "redux";

import { MessageModel } from "../../models";

import * as actions from "./actions";
import { createMockMessage } from "../../mock";

const initial: IMessagesState = {
  list: [],
};

export default function reducer(
  state: IMessagesState = initial,
  action: AnyAction
): IMessagesState {
  switch (action.type) {
    case actions.messagesSend.TYPE:
      return {
        ...state,
        list: [
          ...state.list,
          createMockMessage({
            fromUserId: "1111",
            text: action.payload,
          }),
        ],
      };

    case actions.messagesReceive.TYPE:
      return {
        ...state,
        list: [
          ...state.list,
          createMockMessage({
            text: action.payload,
          }),
        ],
      };

    case actions.messagesRemove.TYPE:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
}

type IMessagesState = {
  list: MessageModel[];
};
