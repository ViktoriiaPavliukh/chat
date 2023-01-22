import { IState } from "../../store";

export const selectFeature = (state: IState) => (state as any).feature;
