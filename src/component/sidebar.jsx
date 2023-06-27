import React, { useEffect, useState } from "react";
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
import axios from "axios";
export const Sidebar = ({ blog }) => {
  const [datacategory, setDatacategory] = useState([]);
  const category = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      // console.log(res);
      const resultcategory = res.data;
      // console.log(resultcategory);
      setDatacategory(resultcategory);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    category();
  }, [datacategory]);
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
      {datacategory.map((item) => {
        return (
          <Button
            _hover={{ bgColor: "#00C4FF" }}
            mr={"10px"}
            mb={"10px"}
            borderRadius={"15px"}
          >
            {item.name}
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
