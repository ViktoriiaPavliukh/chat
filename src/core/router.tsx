import { createBrowserRouter, createHashRouter } from "react-router-dom";

import { Root } from "../views/Root";
import { ChatList, ChatRoom } from "../views/chat";
import { AuthSignIn, AuthSignUp, AuthForgot } from "../views/auth";
import { UserProfile } from "../views/user";

const createRouter =
  process.env.ENV === "gh-pages" ? createHashRouter : createBrowserRouter;

export const router = createRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <ChatList />,
      },
      {
        path: ":roomId",
        element: <ChatRoom />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/signin",
    element: <AuthSignIn />,
  },
  {
    path: "/signup",
    element: <AuthSignUp />,
  },
  {
    path: "/forgot",
    element: <AuthForgot />,
  },
]);
