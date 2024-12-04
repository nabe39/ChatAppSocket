import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { DownloadSimple, Image } from "phosphor-react";
import React from "react";
const CustomTypography = styled(Typography)(({ theme }) => ({
  caption: {
    lineHeight: 1.5,
    fontSize: "0.75em",
    fontWeight: 600,
    color: theme.palette.text,
  },
  body2: {
    color: "white",
    lineHeight: 22 / 14,
    fontSize: "0.875rem",
    fontWeight: 600,
  },
}));
const DocMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.warning.main
            : theme.palette.success.dark,
          borderRadius: 1.5,
          width: "max-context",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption"> Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography variant="body2"
          sx={{ color: el.incoming ? theme.palette.primary.text: "#fff" }} >{el.message}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
const LinkMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.warning.main
            : theme.palette.success.dark,
          borderRadius: 1.5,
          width: "max-context",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={el.preview}
              alt={el.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Stack spacing={2}>
              <Typography variant="subtitle2">Creating Chat app</Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.warning.main }}
                component={Link}
                to="https://www.youtube.com"
              >
                www.youtube.com
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : "#fff"}
            >
              {el.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
const ReplyMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.warning.main
            : theme.palette.success.dark,
          borderRadius: 1.5,
          width: "max-context",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={"column"}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {el.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
const MediaMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.warning.main
            : theme.palette.success.dark,
          borderRadius: 1.5,
          width: "max-context",
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
const TextMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.warning.main
            : theme.palette.success.dark,
          borderRadius: 1.5,
          width: "max-context",
        }}
      >
        <CustomTypography
          style={{ color: el.incoming ? theme.palette.text : "#fff" }}
          variant="body2"
          // color={el.incoming ? theme.palette.text : "#fff"}
        >
          {el.message}
        </CustomTypography>
      </Box>
    </Stack>
  );
};

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      margin={"20px"}
    >
      <Divider width="46%" />
      <CustomTypography
        style={{ color: theme.palette.text }}
        variant="caption"
        // color={{color: theme.palette.text}}
      >
        {el.text}
      </CustomTypography>
      <Divider width="46%" />
    </Stack>
  );
};
export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
