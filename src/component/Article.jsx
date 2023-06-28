import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Select,
  Card,
  CardBody,
  Stack,
  Tag,
  CardFooter,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsBookmarkPlus, BsHeart } from "react-icons/bs";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [index, setIndex] = useState(1);
  const [page, setPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");

  const fetchData = async () => {
    try {
      const url = `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${selectedCategory}&sort=${sortOrder}&page=${index}`;

      const response = await axios.get(url);
      setPage(response.data.page);
      console.log(response.data);
      //   console.log(articles);
      setArticles(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [index]);

  const handleNextPage = () => {
    if (index < page) setIndex(index + 1);
  };

  const handlePrevPage = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryFilter = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortOrder = (event) => {
    setSortOrder(event.target.value);
  };

  const handlePageChange = (pageIndex) => {
    setIndex(pageIndex);
  };
  const renderPageButtons = () => {
    const totalPages = page;
    const startPage = Math.max(1, index - 2);
    const endPage = Math.min(startPage + 4, totalPages);

    const pageButtons = [];
    for (let pageNum = startPage; pageNum <= endPage; pageNum++) {
      pageButtons.push(
        <Button
          key={pageNum}
          variant="outline"
          onClick={() => handlePageChange(pageNum)}
          isActive={index === pageNum}
          disabled={index === pageNum}
          color="blue.400"
        >
          {pageNum}
        </Button>
      );
    }

    return pageButtons;
  };
  const filteredArticles = articles.filter((article) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const lowerCaseTitle = article.title.toLowerCase();
    const lowerCaseAuthor = article.User.username.toLowerCase();
    const lowerCaseCategory = article.Category.name.toLowerCase();

    return (
      lowerCaseTitle.includes(lowerCaseSearchTerm) ||
      lowerCaseAuthor.includes(lowerCaseSearchTerm) ||
      lowerCaseCategory.includes(lowerCaseSearchTerm)
    );
  });

  const sortedArticles = filteredArticles.sort((a, b) => {
    if (sortOrder === "ASC") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "DESC") {
      return b.title.localeCompare(a.title);
    } else if (sortOrder === "createdAt_ASC") {
      return a.createdAt.localeCompare(b.createdAt);
    } else if (sortOrder === "createdAt_DESC") {
      return b.createdAt.localeCompare(a.createdAt);
    }
  });

  return (
    <Box mx={10}>
      <Box>
        <Flex alignItems={"center"}>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            All Article
          </Text>
          <Box flex={1} borderBottom={"2px solid black"} />
        </Flex>
      </Box>
      <Box mt={3} display={"flex"} justifyContent={"space-between"} gap={4}>
        <Input
          placeholder="Search..."
          rounded={"xl"}
          focusBorderColor="#00C4FF"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Select
          placeholder="All Categories"
          rounded={"xl"}
          focusBorderColor="#00C4FF"
          value={selectedCategory}
          onChange={handleCategoryFilter}
        >
          <option value="1">Bisnis</option>
          <option value="2">Ekonomi</option>
          <option value="3">Teknologi</option>
          <option value="4">Olahraga</option>
          <option value="5">Kuliner</option>
          <option value="6">Internasional</option>
          <option value="7">Fiksi</option>
        </Select>
        <Select
          rounded={"xl"}
          focusBorderColor="#00C4FF"
          value={sortOrder}
          onChange={handleSortOrder}
        >
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
          <option value="createdAt_ASC">Oldest First</option>
          <option value="createdAt_DESC">Newest First</option>
        </Select>
      </Box>
      <Box gap={4}>
        <Swiper slidesPerView={3}>
          {sortedArticles.map((article) => (
            <SwiperSlide key={article.id}>
              <Box display={"flex"} justifyContent={"space-between"} p={4}>
                <Card w={"full"} h={"430px"}>
                  <CardBody>
                    <Box
                      height={"100px"}
                      position="relative"
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      borderRadius="lg"
                      backgroundImage={`https://minpro-blog.purwadhikabootcamp.com/${article.imageURL}`}
                    ></Box>
                    <Stack mt="6" spacing="3">
                      <Heading size="md" noOfLines={1}>
                        {article.title}
                      </Heading>
                      <Text noOfLines={2}>{article.content}</Text>
                      <Text fontSize={"sm"} color={"gray.500"}>
                        {article.User.username}
                      </Text>
                      <Text fontSize={"sm"} color={"gray.500"}>
                        Published:{" "}
                        {new Date(article.createdAt).toLocaleDateString()}
                      </Text>
                    </Stack>
                    <Tag
                      size={"md"}
                      rounded={"full"}
                      mt={4}
                      fontWeight={"normal"}
                    >
                      {article.Category.name}
                    </Tag>
                  </CardBody>
                  <CardFooter
                    display={"flex"}
                    justifyContent={"space-between"}
                    mt={"-4"}
                  >
                    <IconButton
                      variant={"ghost"}
                      size={"md"}
                      rounded={"full"}
                      aria-label="Bookmark"
                      icon={<BsBookmarkPlus />}
                    />
                    <IconButton
                      variant={"ghost"}
                      size={"md"}
                      rounded={"full"}
                      aria-label="Like"
                      icon={<BsHeart />}
                    />
                  </CardFooter>
                </Card>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box display="flex" justifyContent="center" mb={4}>
        <Button
          size={"sm"}
          _hover={{ bgColor: "blue.100" }}
          bgColor="#00C4FF"
          onClick={handlePrevPage}
          disabled={index === 1}
        >
          Previous
        </Button>
        {renderPageButtons()}
        <Button
          size={"sm"}
          _hover={{ bgColor: "blue.100" }}
          bgColor="#00C4FF"
          onClick={handleNextPage}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Article;