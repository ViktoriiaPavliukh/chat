import React from "react";
import Container from "@mui/material/Container";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

export function Root() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          <Header />
          <Main />
        </Box>
      </Container>
    </React.Fragment>
  );
}
