import * as React from "react";
import { Fragment } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { ChatModel } from "../../../../core/models";
import { ChatItem } from "./ChatItem";

export function ChatList({ list }: IProps) {
  return (
    <List sx={{ bgcolor: "background.paper" }}>
      <Divider component="li" />

      {list.map((item, index) => (
        <Fragment key={index}>
          <ChatItem chat={item} />
          <Divider component="li" />
        </Fragment>
      ))}
    </List>
  );
}

interface IProps {
  list: ChatModel[];
}

// export function ChatList({ list }: IProps) {
//   return (
//     <List
//       sx={{
//         width: "100%",
//         bgcolor: "background.paper",
//         position: "relative",
//         overflow: "auto",
//         "& ul": { padding: 0 },
//       }}
//       subheader={<li />}
//     >
//       {[0, 1, 2, 3, 4].map((sectionId) => (
//         <li key={`section-${sectionId}`}>
//           <ul>
//             <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
//             {[0, 1, 2].map((item) => (
//               <ListItem key={`item-${sectionId}-${item}`}>
//                 <ListItemText primary={`Item ${item}`} />
//               </ListItem>
//             ))}
//           </ul>
//         </li>
//       ))}
//     </List>
//   );
// }

// interface IProps {
//   list: ChatModel[];
// }
