import React from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
export const Changeavatar = () => {
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
