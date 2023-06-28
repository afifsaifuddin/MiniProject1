import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  MenuItem,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../Redux/Reducer/Authreducer";
export const Buttonsignin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.authreducer.username);
  const fotoProfile = useSelector((state) => state.authreducer.fotoProfile);
  const login = useSelector((state) => state.authreducer.login);
  return (
    <Box>
      {!login ? (
        <Button onClick={() => navigate("/Signin")}>Login</Button>
      ) : (
        <Menu>
          <MenuButton
            pl={2}
            variant={""}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            <Avatar src={fotoProfile} />
          </MenuButton>
          <MenuList>
            <Stack align={"center"}>
              <Avatar src={fotoProfile} />
              <Text fontWeight={"black"}> {username}</Text>
            </Stack>

            <Link to="/Accountprofile">
              <MenuItem mt={5} fontWeight={"bold"} gap={1}>
                <CgProfile size={"25px"} />
                Profile
              </MenuItem>
            </Link>
            <Link to="">
              <MenuItem fontWeight={"bold"} gap={1}>
                <AiOutlineEdit size={"25px"} />
                Edit Profile
              </MenuItem>
            </Link>
            <Button
              bgColor={"#00C4FF"}
              mt={5}
              borderRadius={10}
              ml={"55%"}
              onClick={() => dispatch(logoutSuccess())}
            >
              Logout
            </Button>
          </MenuList>
        </Menu>
        // <Button onClick={() => dispatch(logoutSuccess())}>Logout</Button>
      )}
    </Box>
  );
};
