import React from "react";
import { Box, Input, Text, Stack, Button } from "@chakra-ui/react";
export const Editprofile = () => {
  return (
    <Box>
      <Box>
        <Text fontSize={"4xl"} fontWeight={"extrabold"} mb={"50px"}>
          Edit Profile
        </Text>
      </Box>
      <Stack gap={"10px"}>
        <Text fontWeight={"bold"}>Foto Profile : </Text>
        <Input variant={""} type="file"></Input>
        <Text fontWeight={"bold"}>Name : </Text>
        <Input placeholder="Input your name"></Input>
        <Text fontWeight={"bold"}>Email : </Text>
        <Input placeholder="Input your Email Address"></Input>
        <Text fontWeight={"bold"}>Phone Number : </Text>
        <Input placeholder="Input your Phone Number"></Input>
        <Button _hover={{ bgColor: "blue.200" }}>Submit</Button>
      </Stack>
    </Box>
  );
};
