import { ID } from "./_ID";

export type UserID = ID<User>;

export interface User {
  id: User;
  title: string;
}
