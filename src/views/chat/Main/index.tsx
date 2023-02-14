import * as React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { Container, Grid, styled } from "@mui/material";

import { ChatModel } from "../../../core/models";

import { selectChatsList } from "../../../core/store/chats/selectors";
import { IState } from "../../../core/store";

import { ChatList } from "./components/ChatList";

const MainPageContainer = styled(Container)({
  flex: "1 1 auto",
  display: "flex",
  alignItems: "stretch",
});

const ListContainer = styled(Grid)({
  overflow: "auto",
  maxHeight: "100%",
});

export function Main({ chatList }: IProps) {
  return (
    <MainPageContainer disableGutters>
      <Grid container>
        <ListContainer item md={4} xs={3} mr={1}>
          <ChatList list={chatList} />
        </ListContainer>

        <Grid item md>
          <Outlet />
        </Grid>
      </Grid>
    </MainPageContainer>
  );
}

const mapState = (state: IState) => ({
  chatList: selectChatsList(state),
});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Main);

interface IProps {
  chatList: ChatModel[];
}
