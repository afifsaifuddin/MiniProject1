import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const Buttonwrite = () => {
  const navigate = useNavigate();
  const login = useSelector((state) => state.authreducer.login);
  return (
    <Box>
      <Button
        onClick={!login ? () => navigate("/Signin") : () => navigate("/Write")}
        _hover={{ color: "#00C4FF" }}
        variant={""}
        gap={1}
      >
        <EditIcon boxSize={7} /> <Text>Write</Text>
      </Button>
    </Box>
  );
};
