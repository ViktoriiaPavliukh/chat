import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function BoxSend() {
  return (
    <Box
      sx={{
        width: 500,
        backgroundColor: "#cdf3f7",
        "&:hover": {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Box>
  );
}
export function BoxReceive() {
  return (
    <Box
      sx={{
        width: 500,
        backgroundColor: "#d7e6e8",
        "&:hover": {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Box>
  );
}
