import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { ToggleSideBar } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";

export const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "320px", height: "100vh" }}>
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
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography p={3} variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSideBar());
              }}
            >
              <X />
            </IconButton>
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
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={"D"}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                Vo Hong Duc
              </Typography>
              <Typography variant="article" fontWeight={600}>
                +94 448 0204
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">
              Hi there, i'm ching chong ding dong
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media, Links & Docs</Typography>
            <Button endIcon={<CaretRight />}>401</Button>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {[1, 2, 3].map((el) => {
              return (
                <Box>
                  <img src={faker.image.food()} alt={faker.name.fullName()} />
                </Box>
              );
            })}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={"C"} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Coding Monk</Typography>
              <Typography variant="caption">
                Owl, Parrot, Rabbit, You
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button startIcon={<Prohibit/>} fullWidth variant="outlined">Block</Button>
            <Button startIcon={<Trash/>} fullWidth variant="outlined">Delete</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
