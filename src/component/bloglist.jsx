import React, { useEffect, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import {
  Image,
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { BsFillBookmarksFill } from "react-icons/bs";
import { SlLike, SlDislike } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { likeArticle } from "../Redux/Reducer/Authreducer";

export const Bloglist = () => {
  const dispatch = useDispatch();

  const [favarticle, setFavarticle] = useState([]);

  const toast = useToast();

  const favArticle = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav?orderBy=total_fav&sort=DESC&size=10"
      );
      const resultfavArticle = res.data.result;
      setFavarticle(resultfavArticle);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = (item) => {
    const token = localStorage.getItem("token");
    if (token) {
      toast({
        title: "Success",
        description: "Like Success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // console.log(likeArticle);
      return dispatch(likeArticle(item));
    } else {
      toast({
        title: "Errorr",
        description: "Login First",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    // const status = donelike.some((item) => item.BlogId == article.id);
    // setLiked(status);
    favArticle();
  }, []);

  return (
    <Stack mx={10}>
      <Flex alignItems={"center"}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          border={"3px solid #00C4FF"}
          borderRadius={10}
          p={1}
        >
          Hot Trending
        </Text>
        <Box flex={1} borderBottom={"3px solid #00C4FF"} />
      </Flex>
      {favarticle.map((item) => {
        return (
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              h={"300px"}
              w={"200px"}
              borderRadius={10}
              p={2}
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
              alt="Image"
            />

            <Stack>
              <CardBody>
                <Heading size="sm">{item.title}</Heading>
                <Text>{item.Category.name}</Text>
                <Text py="5" fontSize={"sm"}>
                  {item.content}
                </Text>
                <Flex>
                  <Avatar
                    src={`https://minpro-blog.purwadhikabootcamp.com/${item.User.imgProfile}`}
                  ></Avatar>
                  <Stack>
                    <Text fontWeight={"bold"} ml={5} fontSize="md" pt={2}>
                      {item.User.username}
                    </Text>
                  </Stack>
                </Flex>
              </CardBody>
              <CardFooter mt={-5}>
                <Flex>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    _hover={{ bgColor: "#00C4FF" }}
                    bgColor={"Black"}
                    mr={2}
                  >
                    Read More
                  </Button>
                  <Button _hover={{ color: "#00C4FF" }} variant={""}>
                    <BsFillBookmarksFill size={"20px"} />
                  </Button>

                  <Button
                    _hover={{ color: "#00C4FF" }}
                    variant={""}
                    onClick={() => {
                      handleLike(item.id);
                    }}
                  >
                    <SlLike size={"20px"} />
                  </Button>
                  <Text fontWeight={"bold"} mt={2}>
                    {" "}
                    Disukai {item.total_fav} orang
                  </Text>
                </Flex>
              </CardFooter>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
};
