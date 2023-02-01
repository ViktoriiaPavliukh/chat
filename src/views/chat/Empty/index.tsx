import * as React from "react";
import { styled, Paper, Typography } from "@mui/material";

const ShadowContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(25),
}));

export function ChatEmpty() {
  return (
    <ShadowContainer>
      <Typography sx={{ color: "#919191" }}>
        Select a chat to start messaging{" "}
      </Typography>
    </ShadowContainer>
  );
}
