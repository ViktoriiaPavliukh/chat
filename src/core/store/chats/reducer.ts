import { ChatModel } from "../../models";
import { createMockChat } from "../../mock";

import { createMappedReducer } from "../_utils";

import * as actions from "./actions";

export default createMappedReducer<ChatModel>({
  actions: {
    ADD: actions.actionTest.TYPE,
    REMOVE: actions.actionTest.TYPE,
  },
  initial: [
    createMockChat({
      id: "1111",
      title: "Ann Gold",
    }),
    createMockChat({
      id: "2222",
      title: "Hillel Pro",
    }),
    createMockChat({
      id: "3333",
      title: "Ukraine Group",
    }),
    createMockChat({
      id: "5555",
      title: "React Team",
    }),
    createMockChat({
      id: "5989",
      title: "English Teacher",
    }),
  ],
});
