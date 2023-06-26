import React from "react";
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
} from "@chakra-ui/react";
import Slider from "react-slick";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";
export default function CarouselNew({ data }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  return (
    <Box
      mt={"60px"}
      pt={"100px"}
      pb={"100px"}
      bgImg={
        "https://media.istockphoto.com/id/135341581/id/foto/buku-buku-lama-di-perpustakaan-big-file.jpg?s=612x612&w=0&k=20&c=HFQsk7Hezb2ZjqDSDwdF2xLPma4ZqNhD8sU86BZSt5Y="
      }
    >
      <Box>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          mt={"305px"}
          ml={"30px"}
          bgColor={"#0EA293"}
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={"side"}
          top={"top"}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          mt={"-1280px"}
          bgColor={"#0EA293"}
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        <Slider {...settings} ref={setSlider}>
          {data.map((item) => {
            return (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                width={"100px"}
                mr={"10px"}
              >
                <Image
                  borderRadius={5}
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "100%" }}
                  src="/purwadhika.png"
                  alt="Image"
                />

                <Stack>
                  <CardBody>
                    <Heading size="lg">{item.title}</Heading>

                    <Text py="5" fontSize={"2xl"}>
                      {item.desc}
                    </Text>
                    <Text>Author : {item.author}</Text>
                  </CardBody>
                  <CardFooter>
                    <Flex>
                      <Button
                        bgColor={"grey"}
                        variant="solid"
                        colorScheme="blue"
                        _hover={{ bgColor: "#0EA293" }}
                      >
                        Read More
                      </Button>
                      <Button variant={""} _hover={{ color: "#ED2B2A" }}>
                        <AiTwotoneLike size={30} />
                      </Button>
                    </Flex>
                  </CardFooter>
                </Stack>
              </Card>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}
