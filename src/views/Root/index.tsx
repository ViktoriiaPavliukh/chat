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
  flex: "1 1 auto",
  display: "flex",
  flexDirection: "column",
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
// const RootContainer = styled(Container)({
//   display: "flex",
//   flexDirection: "column",
//   minHeight: "100vh",
//   maxHeight: "100vh",
// });

// const Content = styled(Container)(({ theme }) => ({
//   flex: "1 1 auto",
//   display: "flex",
//   flexDirection: "column",
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// export function Root() {
//   return (
//     <RootContainer disableGutters maxWidth={false}>
//       <WSConnector />
//       <Header />

//       <Content disableGutters>
//         <CssBaseline />

//         <Outlet />
//       </Content>
//     </RootContainer>
//   );
// }
