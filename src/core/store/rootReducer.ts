import { combineReducers } from "redux";

import messagesReducer from "./messages/reducer";
import chatsReducer from "./chats/reducer";
// import usersReducer from "./users/reducer";

const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
});

export default rootReducer;

export type IState = ReturnType<typeof rootReducer>;

// const rootReducer = combineReducers({
//   chats: chatsReducer,
//   messages: messagesReducer,
//   users: usersReducer,
// });

// export default rootReducer;

// export type IState = ReturnType<typeof rootReducer>;
