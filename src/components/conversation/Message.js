import React from "react";
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import {
  TextMsg,
  Timeline,
  MediaMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from "./MsgTypes";

export const Message = ({ menu }) => {
  return (
    <Box spacing={2} margin={"5px"}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //Timeline
              // console.log(`timeline: ${el.text}`)
              return <Timeline el={el} />;
            // break;
            case "msg":
              switch (el.subtype) {
                case "img":
                  //img msg
                  // console.log(`img: ${el.type}`)
                  return <MediaMsg el={el} menu={menu} />;
                // break;
                case "doc":
                  //Doc msg
                  //   console.log(`doc: ${el.type}`);
                  //   break;
                  return <DocMsg el={el} menu={menu} />;
                case "link":
                  //Link msg
                  //   console.log(`link: ${el.type}`);
                  //   break;
                  return <LinkMsg el={el} menu={menu} />;
                case "reply":
                  //Reply msg
                  //   console.log(`reply: ${el.type}`);
                  //   break;
                  return <ReplyMsg el={el} menu={menu} />;
                default:
                  // text msg
                  // console.log(`msg: ${el.type}`)
                  return <TextMsg el={el} menu={menu} />;
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};
