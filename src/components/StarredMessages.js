import { Box, Stack, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateSideBarType } from "../redux/slices/app";
import { CaretLeft } from "phosphor-react";
import { Message } from "./conversation/Message";

const StarredMessages = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "8px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            direction={"row"}
            sx={{ height: "100%" }}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSideBarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography p={3} variant="subtitle2">
              Starred Messages
            </Typography>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Message />
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
