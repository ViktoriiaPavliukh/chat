import * as React from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export function UploadButton() {
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="label"
      onClick={() => {}}
    >
      <input hidden accept="image/*" type="file" />
      <PhotoCamera />
    </IconButton>
  );
}

export function SendButton(props: { onClick: () => void }) {
  return (
    <Button variant="contained" endIcon={<SendIcon />} onClick={props.onClick}>
      Send
    </Button>
  );
}
