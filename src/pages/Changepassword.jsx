import React from "react";
import { Box, Text, Stack, Input, Button } from "@chakra-ui/react";
export const Changepassword = () => {
  return (
    <Box>
      <Box>
        <Text fontSize={"4xl"} fontWeight={"extrabold"} mb={"50px"}>
          Change Password
        </Text>
      </Box>
      <Stack gap={"10px"}>
        <Text fontWeight={"bold"}>Old Password : </Text>
        <Input placeholder="Old Password"></Input>
        <Text fontWeight={"bold"}>New Password : </Text>
        <Input placeholder="New Password"></Input>
        <Text fontWeight={"bold"}>Confirm New Password : </Text>
        <Input placeholder="Confirm New Password"></Input>
        <Button _hover={{ bgColor: "blue.200" }}>Submit</Button>
      </Stack>
    </Box>
  );
};
