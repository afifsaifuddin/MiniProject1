import React, { useState } from "react";
import {
  Image,
  Box,
  Button,
  Stack,
  Avatar,
  Flex,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Editprofile } from "../pages/Editprofile";
import gambar from "../jokowi.jpeg";
import { Changepassword } from "../pages/Changepassword";
import { Infoprofile } from "./Infoprofile";
export const Sidebarprofile = () => {
  const [activepage, setActivepage] = useState("EditProfile");
  const renderPage = () => {
    switch (activepage) {
      case "Infoprofile":
        return <Infoprofile />;
      case "EditProfile":
        return <Editprofile />;
      case "Changepassword":
        return <Changepassword />;
      default:
        return null;
    }
  };
  return (
    <Flex>
      <Box bg="blue.200" w="300px" h={"863px"}>
        <VStack align="center" spacing={4}>
          <Avatar
            src={gambar}
            alt="foto profil"
            width={"200px"}
            height={"200px"}
            border={"1px black solid"}
            mt={"100px"}
            mb={"50px"}
          />
          <Link
            onClick={() => setActivepage("Infoprofile")}
            fontSize={"md"}
            fontWeight={"bold"}
            ml={1}
          >
            <Button variant={"ghost"} width={"300px"}>
              Profile
            </Button>
          </Link>
          <Link
            onClick={() => setActivepage("EditProfile")}
            fontSize={"md"}
            fontWeight={"bold"}
            ml={1}
          >
            <Button variant={"ghost"} width={"300px"}>
              Edit Profile
            </Button>
          </Link>
          <Link
            onClick={() => setActivepage("Changepassword")}
            fontSize={"md"}
            fontWeight={"bold"}
            ml={1}
          >
            <Button variant={"ghost"} width={"300px"}>
              Change Password
            </Button>
          </Link>
        </VStack>
      </Box>
      <Box flex="1" p={4}>
        {renderPage()}
      </Box>
    </Flex>
  );
};
