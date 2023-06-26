import React from "react";
import { Buttonsignin } from "./buttonsignin";
import { Profile } from "./profile";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Spacer, Button, Image } from "@chakra-ui/react";
import logo from "../7490271 2.png";
import { Buttonwrite } from "./Buttonwrite";
export const Navbar = () => {
  return (
    <Box
      bgColor={"white"}
      w={"100%"}
      // position={"fixed"}
      zIndex={100}
      borderBottom={"2px solid #00C4FF"}
      p={3}
    >
      <Flex gap={2}>
        <Link to={"/"}>
          <Image src={logo} pr={2} width={"15%"}></Image>
        </Link>
        <Spacer />
        <Buttonwrite />

        <Buttonsignin m={0} />
      </Flex>
    </Box>
  );
};
