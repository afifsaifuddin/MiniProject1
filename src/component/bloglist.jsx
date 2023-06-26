import React, { useState } from "react";
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
} from "@chakra-ui/react";
export const Bloglist = ({ blog }) => {
  const [isLike, setisLike] = useState(10);
  const [liked, setLiked] = useState(false);
  const onClickButtonLike = () => {
    setisLike(isLike + (liked ? -1 : 1));
    setLiked(!liked);
  };
  return (
    <Stack w={900}>
      <Flex alignItems={"center"}>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          Hot Trending
        </Text>
        <Box flex={1} borderBottom={"2px solid black"} />
      </Flex>
      {blog.map((item) => {
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
                <Heading size="lg">{item.title}</Heading>
                <Text>{item.Category.name}</Text>
                <Text py="5" fontSize={"md"}>
                  {item.content}
                </Text>
                <Flex>
                  <Avatar
                    src={`https://minpro-blog.purwadhikabootcamp.com/${item.User.imgProfile}`}
                  ></Avatar>
                  <Stack>
                    <Text fontWeight={"bold"} ml={5} fontSize="md">
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
                  <Button
                    _hover={{ color: "#00C4FF" }}
                    onClick={onClickButtonLike}
                  >
                    Like | {isLike}
                  </Button>
                </Flex>
              </CardFooter>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
};
