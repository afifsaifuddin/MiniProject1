import React from "react";
import { Box, Flex, Stack, Image, Text, Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import gambar from "../7490271.png";
export const Footer = () => {
  return (
    <Box bgColor={"#00C4FF"}>
      <Flex p={"50px"} gap={10} justifyContent={"space-around"}>
        <Stack>
          <Image src={gambar} w={"200px"}></Image>
          <Text>
            copyright &copy; 2023 The Curious Pen.
            <br />
            All rights reserved
          </Text>
        </Stack>
        <Stack>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Company
          </Text>
          <Link to="">About Us</Link>
          <Link to="">Blog</Link>
          <Link to="">Careers</Link>
          <Link to="">Contact Us</Link>
        </Stack>
        <Stack>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Social Media
          </Text>
          <Link>
            <Flex gap={2}>
              <BsFacebook size={20} /> <Text>Facebook</Text>
            </Flex>
          </Link>
          <Link>
            <Flex gap={2}>
              <RiInstagramFill size={20} /> <Text>Instagram</Text>
            </Flex>
          </Link>
          <Link>
            <Flex gap={2}>
              <BsTwitter size={20} /> <Text>Twitter</Text>
            </Flex>
          </Link>
          <Link>
            <Flex gap={2}>
              <BsYoutube size={20} /> <Text>youtube</Text>
            </Flex>
          </Link>
        </Stack>
        <Stack>
          <Text fontWeight={"medium"}>Stay up to date</Text>
          <Flex gap={2}>
            <Input placeholder="Enter your email..."></Input>
            <Button fontSize={"15px"}>Subscribe</Button>
          </Flex>
        </Stack>
      </Flex>
      <Text align={"center"}>Made with 🧡 by Afif Saifuddin</Text>
      <Text align={"center"} fontWeight={"bold"}>
        "Curious Musings,Written With Pen And Purpose"
      </Text>
    </Box>
  );
};
