import React from "react";
import { Stack } from "@mui/material";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <Stack direction={"row"}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
