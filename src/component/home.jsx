import React from "react";
import { Box, Image } from "@chakra-ui/react";
import gambar from "../7490271.png";
export const Home = () => {
  return (
    <Box
      mt={"70px"}
      bgSize={"cover"}
      bgPos={"bottom"}
      bgImage={
        "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80"
      }
    >
      <Image pl={"50px"} py={"235px"} width={"70%"} src={gambar}></Image>
    </Box>
  );
};
