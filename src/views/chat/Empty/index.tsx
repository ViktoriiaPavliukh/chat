import * as React from "react";
import { styled, Paper } from "@mui/material";

const ShadowContainer = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'red',
  padding: theme.spacing(1),
}));

export function ChatEmpty() {
  return (
    <ShadowContainer>
      {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam fugiat
      necessitatibus porro vitae voluptate? Animi cupiditate eius labore tenetur
      ut. Esse id itaque maxime obcaecati porro saepe totam! Eius, facere. */}
    </ShadowContainer>
  );
}
