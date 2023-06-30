import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changePicture } from "../../Redux/Reducer/Authreducer";
export const Changeavatar = () => {
  const { user } = useSelector((state) => state.authreducer);
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  function changeAva() {
    const [file] = document.getElementById("file").files;
    const avaURL = URL.createObjectURL(file);
    setImage(avaURL);
  }
  function handleSubmit() {
    const file = document.getElementById("file").files[0];
    dispatch(changePicture(file));
  }
  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={"30px"} mb={"30px"}>
        Change Avatar
      </Text>
      <Box>
        <Flex gap={10} mb={"10px"}>
          <Box align={"center"}>
            <Avatar
              src={`https://minpro-blog.purwadhikabootcamp.com/${user.imgProfile}`}
              alt="Avatar Profile"
              size={"2xl"}
            />
            <Text fontWeight={"bold"}>Current Avatar</Text>
          </Box>
          <Box mt={"50px"}>
            <FaLongArrowAltRight size={"30px"} />
          </Box>
          <Box align={"center"}>
            <Avatar src={image} size={"2xl"} />
            <Text fontWeight={"bold"}>New Avatar</Text>
          </Box>
        </Flex>
        <Stack>
          <input type="file" onChange={changeAva} id="file" variant="" />
          <Button
            type="submit"
            bgColor={"#00C4FF"}
            w={"27%"}
            onClick={handleSubmit}
          >
            Change Avatar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
