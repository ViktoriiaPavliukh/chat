import * as React from "react";
import { Link } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export function ChatList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Group name"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "block" }}
                component="h3"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {"I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "block" }}
                component="h3"
                variant="body2"
                color="text.primary"
              >
                Jennifer
              </Typography>
              {"Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="+380934902222"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "block" }}
                component="h3"
                variant="body2"
                color="text.primary"
              ></Typography>
              {"Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

// export function ChatList() {
//   return (
//     <div>
//       Chat List
//       <ul>
//         <li>
//           <Link href="/123">To Room</Link>
//         </li>
//         <li>
//           <Link href="/signin">To SignIn</Link>
//         </li>
//         <li>
//           <Link href="/signup">To SignUp</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }
