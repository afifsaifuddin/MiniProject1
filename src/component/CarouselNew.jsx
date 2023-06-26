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
  Divider,
  ButtonGroup,
  Avatar,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsFillBookmarksFill } from "react-icons/bs";
export default function CarouselNew({ blog }) {
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

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
  const [isLike, setisLike] = useState(10);
  const [liked, setLiked] = useState(false);
  const onClickButtonLike = () => {
    setisLike(isLike + (liked ? -1 : 1));
    setLiked(!liked);
  };

  return (
    <>
      <Box pb={"50px"}>
        <IconButton
          mt={"250px"}
          ml={"30px"}
          bgColor={"#00C4FF"}
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
          mt={"-2380px"}
          bgColor={"#00C4FF"}
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
          {blog.map((item) => {
            return (
              <Card maxW="sm" h={"full"}>
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
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{item?.title}</Heading>
                    <Text>{item?.Category.name}</Text>
                    <Text>{item?.content}</Text>
                    <Flex>
                      <Avatar
                        src={`https://minpro-blog.purwadhikabootcamp.com/${item?.User.imgProfile}`}
                      ></Avatar>
                      <Stack>
                        <Text fontWeight={"bold"} ml={5} fontSize="md">
                          {item?.User.username}
                        </Text>
                      </Stack>
                    </Flex>
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
                    <Button
                      _hover={{ color: "#00C4FF" }}
                      onClick={onClickButtonLike}
                    >
                      Like | {isLike}
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
