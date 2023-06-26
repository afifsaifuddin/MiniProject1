import React from "react";
import { Box, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";

export const Searchbar = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement>
          <BiSearchAlt />
        </InputLeftElement>
        <Input placeholder="Search..." />
      </InputGroup>
    </Box>
  );
};
