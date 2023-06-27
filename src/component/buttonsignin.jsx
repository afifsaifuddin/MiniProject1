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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../Redux/Reducer/Authreducer";
export const Buttonsignin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
            <Avatar boxSize={35} src="https://bit.ly/broken-link" />
          </MenuButton>
          <MenuList>
            <Link to="/Accountprofile" variant={""}>
              <MenuItem mt={5}>Profile</MenuItem>
            </Link>
            <Link to="" variant={""}>
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
