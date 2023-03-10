import * as React from "react";
import { connect } from "react-redux";
import {
  Grid,
  GridProps,
  Avatar,
  AvatarProps,
  Box,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";

import { BinButton } from "../../../../shared/components";
import { IState } from "../../../../core/store";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
}));

const StyledBox = styled(Box)<{ itsMe: boolean }>(({ itsMe }) => ({
  textAlign: itsMe ? "right" : "left",
}));

const StyledTypography = styled(Typography)<{ itsMe: boolean }>(
  ({ theme, itsMe }) => ({
    display: "inline-block",
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(1, 2),
    backgroundColor: itsMe
      ? theme.palette.primary.main
      : theme.palette.grey[100],
    borderRadius: theme.spacing(0.5),
    [itsMe ? "borderTopLeftRadius" : "borderTopRightRadius"]: theme.spacing(2),
    [itsMe ? "borderBottomLeftRadius" : "borderBottomRightRadius"]:
      theme.spacing(2),
    color: itsMe ? theme.palette.common.white : "",
    wordBreak: "break-word",

    "*:first-child > &": {
      [itsMe ? "borderTopRightRadius" : "borderTopLeftRadius"]:
        theme.spacing(2),
    },

    "*:last-child > &": {
      [itsMe ? "borderBottomRightRadius" : "borderBottomLeftRadius"]:
        theme.spacing(2),
    },
  })
);

export function Message({
  itsMe,
  avatar,
  messages,
  GridContainerProps,
  GridItemProps,
  AvatarProps,
  TypographyProps,
  onDelete,
}: IProps) {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={itsMe ? "flex-end" : "flex-start"}
      {...GridContainerProps}
    >
      {!itsMe && (
        <Grid item {...GridItemProps}>
          <StyledAvatar src={avatar} {...AvatarProps} />
        </Grid>
      )}

      <Grid item xs={8}>
        {messages.map((msg, index) => (
          <StyledBox key={index} itsMe={!!itsMe}>
            <StyledTypography {...TypographyProps} itsMe={!!itsMe}>
              {msg}
              <BinButton onClick={() => onDelete(msg)} />
            </StyledTypography>
          </StyledBox>
        ))}
      </Grid>
    </Grid>
  );
}

interface IProps {
  messages: string[];
  itsMe?: boolean;
  avatar?: string;
  GridContainerProps?: GridProps;
  GridItemProps?: GridProps;
  AvatarProps?: AvatarProps;
  TypographyProps?: TypographyProps;
  // onClick: () => void;
  onDelete: (msg: string) => void;
}
