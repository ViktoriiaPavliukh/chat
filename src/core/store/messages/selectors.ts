import { IState } from "../../store";

export const selectFeature = (state: IState) => state.messages;
