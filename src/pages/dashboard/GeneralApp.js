import React from "react";
import Chats from "./Chats";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Conversation } from "../../components/conversation";

const GeneralApp = () => {
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Chat */}
      <Chats />
      {/* Conversation box */}
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor: "#fff",
        }}
      >
        {/* Conversation */}
        <Conversation/>
      </Box>
    </Stack>
  );
};

export default GeneralApp;
