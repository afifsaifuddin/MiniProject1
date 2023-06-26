import React, { useEffect, useState } from "react";
import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Button,
  Box,
  Flex,
  Image,
  Stack,
  Divider,
  ButtonGroup,
  Avatar,
} from "@chakra-ui/react";
import axios from "axios";
import { AiTwotoneLike } from "react-icons/ai";
export const Allblog = ({ blog }) => {
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
    <Box mb={50}>
      <Flex alignItems={"center"} mt={10} mb={5}>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          All Article
        </Text>
        <Box flex={1} borderBottom={"2px solid black"} />
      </Flex>
      <Flex wrap={"wrap"} gap={5}>
        {datalist.map((item) => {
          return (
            <Card maxW="min">
              <CardBody>
                <Image
                  src={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  w={"200px"}
                  h={"100px"}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.title}</Heading>
                  <Text>{item.Category.name}</Text>
                  <Text>{item.content}</Text>
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
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    _hover={{ bgColor: "#00C4FF" }}
                    bgColor={"Black"}
                  >
                    Read More
                  </Button>
                  <Button variant={""} _hover={{ color: "#ED2B2A" }}>
                    <AiTwotoneLike size={30} />
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </Flex>
    </Box>
  );
};
