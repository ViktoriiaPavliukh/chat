import { ID } from "./_ID";
// import { Message } from './Message';

export type ChatID = ID<Chat>;

export interface Chat {
  id: ChatID;
  title: string;
  lastMessage: Message;
}
