import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
export const LikedArticle = () => {
  const [article, setArticle] = useState([]);
  const getlikedArticle = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/pagLike",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const resultArticle = res.data.result;
      setArticle(resultArticle);
      console.log(article);
    } catch (error) {
      console.log(error);
    }
  };
  return <Box></Box>;
};
