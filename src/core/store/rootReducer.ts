import { combineReducers } from "redux";

import featureReducer from "./__feature/reducer";

const rootReducer = combineReducers({
  feature: featureReducer,
});

export default rootReducer;

export type IState = ReturnType<typeof rootReducer>;
