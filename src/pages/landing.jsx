import React from "react";
import { Box, Stack, Flex, Text } from "@chakra-ui/react";
import { Navbar } from "../component/navbar";
import { Bloglist } from "../component/bloglist";
import { Footer } from "../component/footer";
import CarouselNew from "../component/CarouselNew";
import { Home } from "../component/home";
import Article from "../component/Article";
export const Landing = () => {
  return (
    <Box>
      <Stack>
        <Box pos={"fixed"} zIndex={100}>
          <Navbar />
        </Box>
        <Home />
        <CarouselNew />
        <Bloglist />
        <Article />
      </Stack>
      <Footer />
    </Box>
  );
};
