import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import {
  Box,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Button,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
export const Sidebar = ({ blog }) => {
  return (
    <Box pl={"10px"} pos={"sticky"} top={"100px"}>
      <Box>
        <InputGroup mb={3}>
          <InputLeftElement>
            <BiSearchAlt />
          </InputLeftElement>
          <Input
            w={"500px"}
            placeholder="Search..."
            borderColor={"black"}
            _hover={{ borderColor: "#00C4FF" }}
          />
        </InputGroup>
      </Box>
      <Box>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          Category
        </Text>
      </Box>
      <Box borderBottom={"2px"} my={3} />
      {blog.map((item) => {
        return (
          <Button
            _hover={{ bgColor: "#00C4FF" }}
            mr={"10px"}
            mb={"10px"}
            borderRadius={"15px"}
          >
            {item.Category.name}
          </Button>
        );
      })}
      <Text mt={3} fontSize={"20px"} fontWeight={"bold"} mb={3}>
        Editors
      </Text>
      <Box borderBottom={"2px"} my={3} />
      {blog.map((item) => {
        return (
          <Box>
            <Flex mb={2}>
              <Avatar
                mr={3}
                src={`https://minpro-blog.purwadhikabootcamp.com/${item.User.imgProfile}`}
              />
              <Box>
                <Text fontWeight={"bold"}>{item.User.username}</Text>
              </Box>
            </Flex>
          </Box>
        );
      })}
      <Box />
    </Box>
  );
};
