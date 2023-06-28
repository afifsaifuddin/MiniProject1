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
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../Redux/Reducer/Authreducer";
export const Buttonsignin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.authreducer.username);
  const email = useSelector((state) => state.authreducer.email);
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
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </MenuButton>
          <MenuList>
            <Stack align={"center"}>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Text fontWeight={"bold"}>{username}</Text>
            </Stack>

            <Link to="/Accountprofile">
              <MenuItem mt={5}>Profile</MenuItem>
            </Link>
            <Link to="">
              <MenuItem>Edit Profile</MenuItem>
            </Link>
            <Button
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
