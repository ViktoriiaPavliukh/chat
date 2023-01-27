import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "@mui/material";
import Stack from "@mui/material/Stack";

import { ChatRoom } from "../../chat/index";
import { ChatMain } from "../../chat/index";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export function MainChat() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <ChatMain />
        </Grid>
        <Grid xs={8}>
          <ChatRoom />
        </Grid>
        <Grid xs={4}>
          <div>
            <Stack direction="row" spacing={2}>
              <Link href="/123">To Room</Link>
              <Link href="/signin">To SignIn</Link>
              <Link href="/signup">To SignUp</Link>
            </Stack>
          </div>
        </Grid>
        <Grid xs={8}>{/* <FormInput /> */}</Grid>
      </Grid>
    </Box>
  );
}
