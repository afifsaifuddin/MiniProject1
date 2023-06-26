// import React from "react";
import gambar from "../7490271 2.png";
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Button,
  Avatar,
  MenuProvider, // Add the MenuProvider import
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const Profile = () => {
  return (
    <MenuProvider>
      {" "}
      {/* Wrap your component with MenuProvider */}
      <Box>
        <Menu>
          <MenuButton
            pl={2}
            variant={""}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            <Avatar boxSize={35} src="https://bit.ly/prosper-baba" />
          </MenuButton>
          <MenuList>
            <MenuItem mt={5}>
              <Link to={"/accountprofile"} variant={""}>
                Profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/Accountprofile" variant={""}>
                Edit Profile
              </Link>
            </MenuItem>
            <Button mt={5} borderRadius={10} ml={"55%"}>
              Logout
            </Button>
          </MenuList>
        </Menu>
      </Box>
    </MenuProvider>
  );
};
