import React, { useEffect } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Flex,
  CardFooter,
  Text,
  Button,
  Divider,
  ButtonGroup,
  Avatar,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { useState } from "react";
import { BsFillBookmarksFill } from "react-icons/bs";
import axios from "axios";
export default function CarouselNew() {
  const [slider, setSlider] = useState(null);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "10px",
    slidesToShow: 4,
    slideToScroll: 1,
    speed: 500,
    autoplaySpeed: 1000,
    autoplay: true,
    cssEase: "linear",
  };
  const [latest, setLatest] = useState([]);
  const Latestarticle = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog?sort=DESC&page=1&size=10"
      );
      const resultLatest = res.data.result;
      setLatest(resultLatest);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Latestarticle();
  }, [latest]);
  return (
    <>
      <Box pb={"50px"}>
        <Slider {...settings} ref={setSlider}>
          {latest.map((item) => {
            return (
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={`https://minpro-blog.purwadhikabootcamp.com/${item?.imageURL}`}
                    alt="img"
                    borderRadius="lg"
                    w={"400px"}
                    h={"200px"}
                    overflow={"hidden"}
                    objectFit={"cover"}
                  />
                  <Stack mt="6" spacing="3" h={300}>
                    <Flex>
                      <Avatar
                        src={`https://minpro-blog.purwadhikabootcamp.com/${item?.User.imgProfile}`}
                      ></Avatar>

                      <Text fontWeight={"bold"} ml={5} mt={2} fontSize="md">
                        {item?.User.username}
                      </Text>
                    </Flex>
                    <Heading size="md">{item?.title}</Heading>
                    <Text>{item?.Category.name}</Text>
                    <Text fontSize={"2xs"}>{item?.content}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      _hover={{ bgColor: "#00C4FF" }}
                      bgColor={"Black"}
                      variant="solid"
                      colorScheme="blue"
                    >
                      Read More
                    </Button>
                    <Button _hover={{ color: "#00C4FF" }} variant={""}>
                      <BsFillBookmarksFill />
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Slider>
        {/* </Box> */}
      </Box>
    </>
  );
}
