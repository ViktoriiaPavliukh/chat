import React from "react";
import { Container } from "@mui/material";

import { Header } from "./components/Header";
import { AuthSignIn, AuthSignUp } from "../auth";

export function Root() {
  return (
    <Container>
      <Header />
      <AuthSignIn />
      <AuthSignUp />
    </Container>
  );
}
