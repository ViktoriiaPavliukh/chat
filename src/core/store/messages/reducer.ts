import { AnyAction, combineReducers } from "redux";
import { MessageModel } from "../../models";
import { createMockMessage } from "../../mock";
import { createListReducer } from "../_utils";
import { IPayloadAction } from "../_utils/typesWS";

import * as actions from "./actions";

const initial: IMessagesState = {
  list: [],
};

export default function messagesReducer(
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

    case actions.messageCurrentDelete.TYPE:
      return {
        ...state,
        list: state.list.filter((message) => message.id != action.payload.text),
      };

    default:
      return state;
  }
}

type IMessagesState = {
  list: MessageModel[];
};

// const listReducer = createListReducer({
//   actions: {
//     ADD: actions.messagesReceive.TYPE,
//     REMOVE: "",
//   },
// });

function activeChatIdReducer(
  state: string | null = null,
  action: IPayloadAction<string>
) {
  switch (action.type) {
    case actions.messagesSetCurrentChat.TYPE:
      return action.payload;

    default:
      return state;
  }
}

// export default combineReducers({
//   // list: listReducer,
//   list: messagesReducer,
//   activeChatId: activeChatIdReducer,
// });
