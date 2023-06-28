import React from "react";
import { Box, Button, useToast, Text, Stack } from "@chakra-ui/react";
import axios from "axios";
export const Verificationemail = () => {
  const toast = useToast();
  async function takeToken() {
    const url = window.location.href.split("/");
    const token = url.pop();
    // console.log(token);
    try {
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast({
        title: res.data.message,
        description: "Email Successfully verified!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      document.location.href = "/";
    } catch (error) {
      toast({
        title: "Error",
        description: error.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  return (
    <Stack
      mt={"300px"}
      mx={"auto"}
      width={"30%"}
      borderRadius={"10px"}
      border={"2px #00C4FF solid"}
      display={"flex"}
      justifyContent={"center"}
      boxShadow="lg"
    >
      <Text
        py={"20px"}
        fontWeight={"extrabold"}
        fontSize={"2xl"}
        align={"center"}
      >
        Click the buttom to verified
      </Text>
      <Button
        borderRadius={"5px"}
        onClick={takeToken}
        _hover={{ bgColor: "#00C4FF" }}
      >
        Verified
      </Button>
    </Stack>
  );
};
