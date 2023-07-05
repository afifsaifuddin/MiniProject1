import React, { useEffect, useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Stack,
  Text,
  Flex,
  Button,
  CardFooter,
  CardBody,
  Heading,
  Avatar,
  Card,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { disLikeArticle } from "../Redux/Reducer/Authreducer";

export const Infoprofile = () => {
  const { user } = useSelector((state) => state.authreducer);
  const [article, setArticle] = useState([]);
  const [created, setCreated] = useState([]);
  const dispatch = useDispatch();
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
      setArticle(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDislike = (item) => {
    // console.log("item like", item);
    return dispatch(disLikeArticle(item));
  };
  const getArticlecreated = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/auth",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCreated(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getlikedArticle();
    getArticlecreated();
  }, []);
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Detail Profile</Tab>
          <Tab>Your Favorite Article</Tab>
          <Tab>Your Article</Tab>
        </TabList>
        <TabPanels>
          <TabPanel fontWeight={"bold"} fontSize={"15px"}>
            <Stack mr={"500px"} gap={"20px"}>
              <Flex justifyContent={"space-between"}>
                <Text>Id </Text>
                <Text>{user.id}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Account Status </Text>
                <Text>
                  {user.isVerified ? (
                    <Text color={"green"}>Verified</Text>
                  ) : (
                    <Text color={"red"}>Not Verified</Text>
                  )}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Username </Text>
                <Text>{user.username}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Phone Number </Text>
                <Text>{user.phone}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Email Address </Text>
                <Text>{user.email}</Text>
              </Flex>
            </Stack>
          </TabPanel>
          <TabPanel>
            {article.map((item) => {
              console.log("like di favorite", item.BlogId);
              return (
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Stack>
                    <CardBody>
                      <Heading size="sm">{item.Blog.title}</Heading>
                      <Text>{item.Blog.Category.name}</Text>
                      <Text py="5" fontSize={"sm"}>
                        {item.Blog.content}
                      </Text>
                      <Button
                        _hover={{ bgColor: "#00C4FF" }}
                        onClick={() => {
                          handleDislike(item.BlogId);
                        }}
                      >
                        Dislike
                      </Button>
                    </CardBody>
                  </Stack>
                </Card>
              );
            })}
          </TabPanel>
          <TabPanel>
            {created.map((item) => {
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
                  </Stack>
                </Card>
              );
            })}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
