import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../component/navbar";
import { Sidebarprofile } from "../component/Sidebarprofile";
export const Accountprofile = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Sidebarprofile />
      </Box>
    </>
  );
};
