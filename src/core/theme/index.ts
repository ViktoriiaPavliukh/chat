import React from "react";

import { createTheme, LinkProps } from "@mui/material";

import { NavigateLink } from "./override/index";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3fa8b5",
      light: "#9ec9cb",
      dark: "#5da9b3",
    },
    secondary: {
      main: "#7b1e4e",
    },
  },
  typography: {
    h2: {
      fontFamily: "Andika",
    },
    fontFamily: "Andika",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: NavigateLink,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: NavigateLink,
      },
    },
  },
});
