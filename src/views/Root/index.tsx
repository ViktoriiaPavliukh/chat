import React from "react";
import { Outlet } from "react-router-dom";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { WSConnector } from "./components/WSConnector";
import { styled } from "@mui/material";

import { Header } from "./components/Header";

const Content = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export function Root() {
  return (
    <Container disableGutters fixed>
      <WSConnector />
      <Header />
      <Content>
        <CssBaseline />
        <Outlet />
      </Content>
    </Container>
  );
}
