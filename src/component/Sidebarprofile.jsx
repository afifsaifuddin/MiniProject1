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
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Changeavatar } from "./Edit Profile/Changeavatar";
import { Infoprofile } from "./Infoprofile";
import { Changephone } from "./Edit Profile/Changephone";
import { Changeusername } from "./Edit Profile/Changeusername";
import { Changepassword } from "./Edit Profile/Changepassword";
import { Changeemail } from "./Edit Profile/Changeemail";
import { useSelector } from "react-redux";
export const Sidebarprofile = () => {
  const { user } = useSelector((state) => state.authreducer);
  const [activepage, setActivepage] = useState("Infoprofile");
  const renderPage = () => {
    switch (activepage) {
      case "Infoprofile":
        return <Infoprofile />;
      case "ChangePhoto":
        return <Changeavatar />;
      case "ChangeUsername":
        return <Changeusername />;
      case "ChangePhone":
        return <Changephone />;
      case "ChangeEmail":
        return <Changeemail />;
      case "ChangePassword":
        return <Changepassword />;
      default:
        return null;
    }
  };
  return (
    <Flex>
      <Box bg="#00C4FF" w="300px" h={"863px"}>
        <VStack align="center" spacing={4}>
          <Avatar
            src={`https://minpro-blog.purwadhikabootcamp.com/${user.imgProfile}`}
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
            onClick={() => setActivepage("ChangePhoto")}
            fontSize={"md"}
            fontWeight={"bold"}
            ml={1}
          >
            <Button variant={"ghost"} width={"300px"}>
              Change Avatar
            </Button>
          </Link>
          <Link
            onClick={() => setActivepage("ChangeUsername")}
            fontSize={"md"}
            fontWeight={"bold"}
            ml={1}
          >
            <Button variant={"ghost"} width={"300px"}>
              Change Username
            </Button>
          </Link>

          <Link
            onClick={() => setActivepage("ChangePhone")}
            fontSize={"md"}
            fontWeight={"bold"}
            ml={1}
          >
            <Button variant={"ghost"} width={"300px"}>
              Change Phone
            </Button>
          </Link>

          <Link
            onClick={() => setActivepage("ChangeEmail")}
            fontSize={"md"}
            fontWeight={"bold"}
            ml={1}
          >
            <Button variant={"ghost"} width={"300px"}>
              Change Email
            </Button>
          </Link>

          <Link
            onClick={() => setActivepage("ChangePassword")}
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
