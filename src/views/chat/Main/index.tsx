import * as React from "react";
import { Container, Grid } from "@mui/material";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";

import { ChatList } from "./components/ChatList";
import { ChatModel } from "../../../core/models";

function Main({ chatList }: IProps) {
  return (
    <Container>
      <Grid container>
        <Grid item md={4}>
          <ChatList list={chatList} />
        </Grid>

        <Grid item md>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}

const mapState = () => ({
  chatList: [],
});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Main);

interface IProps {
  chatList: ChatModel[];
}
