import * as React from "react";
import { Link } from "@mui/material";
import { BoxSend, BoxReceive } from "../../../shared/components/index";
// import { useParams } from "react-router-dom";

export function ChatRoom() {
  // const { roomId } = useParams();

  return (
    <div>
      <div>
        <Link href="..">Back</Link>
        <BoxSend />
        <BoxReceive />
      </div>
      {/* Room ID: {roomId} */}
    </div>
  );
}
