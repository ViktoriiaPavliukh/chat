import { UseSliderHiddenInputOwnProps } from "@mui/base";
import { ID } from "./_ID";
// import { UserID } from './User';

export type MessageID = ID<Message>;

export interface Message {
  id: MessageID;
  //  fromUserID:
  created: number;
  text: string;
}
