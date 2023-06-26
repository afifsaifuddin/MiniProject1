import React from "react";
import { Box, Stack, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Navbar } from "../component/navbar";
import { Bloglist } from "../component/bloglist";
import { Artbycategory } from "../component/artbycategory";
import { Footer } from "../component/footer";
import { ImFire } from "react-icons/im";
import { Allblog } from "../component/Allblog";
import { Sidebar } from "../component/sidebar";
import CarouselNew from "../component/CarouselNew";
import { Home } from "../component/home";
import axios from "axios";
import { useEffect } from "react";
export const Landing = () => {
  const [datalist, setDatalist] = useState([]);
  const article = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=3&sort=ASC&page=1"
      );
      const resultarticle = res.data.result;
      setDatalist(resultarticle);
    } catch (error) {
      console.log(error.data.message);
    }
  };
  useEffect(() => {
    article();
  }, [datalist]);
  return (
    <Box>
      <Stack>
        <Box pos={"fixed"} zIndex={100}>
          <Navbar />
        </Box>
        <Home />
        <CarouselNew blog={datalist} />
        <Flex mr={"200px"} ml={"200px"}>
          <Box w={"75%"}>
            <Bloglist blog={datalist} />
            <Allblog blog={datalist} />
          </Box>
          <Box w={"25%"}>
            <Sidebar blog={datalist} />
          </Box>
        </Flex>
      </Stack>
      <Footer />
    </Box>
  );
};
