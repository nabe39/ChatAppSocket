import { Divider, IconButton, Stack } from "@mui/material";
import { GoogleLogo, GithubLogo, TwitterLogo } from "phosphor-react";
import React from "react";

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, &::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton>
          <GoogleLogo style={{ color: "#DF3E30" }} />
        </IconButton>
        <IconButton>
          <GithubLogo style={{ color: "#000000" }} />
        </IconButton>
        <IconButton>
          <TwitterLogo style={{ color: "#1C9CEA" }} />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AuthSocial;
