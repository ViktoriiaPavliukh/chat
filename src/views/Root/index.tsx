import React from "react";
import { Container } from "@mui/material";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AuthSignIn, AuthSignUp } from "../auth";

export function Root() {
  return (
    <Container>
      <Header />
      <Main />
      {/* <AuthSignIn />
      <AuthSignUp /> */}
    </Container>
  );
}
