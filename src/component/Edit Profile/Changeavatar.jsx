import React from "react";
import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
export const Changeavatar = () => {
  const toast = useToast();
  const Avatar = async (values) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded",
        {
          FE_URL: "http://localhost:3000",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      toast({
        title: "Success",
        description: res.data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      //   toast({
      //     title: "Error",
      //     description: error.data.message,
      //     status: "error",
      //     duration: 3000,
      //     isClosable: true,
      //   });
    }
  };
  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={"30px"} mb={"30px"}>
        Change Avatar
      </Text>
      <Input type="file" variant={""} mb={"30px"}></Input>
      <Button type="submit" bgColor={"#00C4FF"}>
        Submit
      </Button>
    </Box>
  );
};
