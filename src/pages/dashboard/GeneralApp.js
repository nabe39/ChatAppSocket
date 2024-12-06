import React from "react";
import Chats from "./Chats";
import { Stack, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { Conversation } from "../../components/conversation";
import { Contact } from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Chat */}
      <Chats />
      {/* Conversation box */}
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
      {/* Contact */}
      {sidebar.open && <Contact/>}
      {/* <Contact /> */}
    </Stack>
  );
};

export default GeneralApp;
