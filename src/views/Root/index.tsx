import React from "react";
import { Container } from "@mui/material";

import { Header } from "./components/Header";
import { AuthSignIn } from "../auth";

export function Root() {
  return (
    <Container>
      <Header />
      <AuthSignIn />
    </Container>
  );
}
