import React, { useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import gambar from "../7490271 2.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { createBlog } from "../Redux/Reducer/Blogreducer";
import axios from "axios";
export const Write = () => {
  const [selected, setSelected] = useState([""]);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const handleContent = (value) => {
    setContent(value);
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("File size exceeds the maximum limit of 2MB.");
      e.target.value = "";
    }
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [category, setCategory] = useState();
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      setCategory(res.data);
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
      country: document.getElementById("country").value,
      CategoryId: selectedOption,
      url: "/",
      keywords: document.getElementById("keywords").value,
    };
    const file = document.getElementById("file").files[0];
    dispatch(createBlog(data, file));
  };
  return (
    <Box maxW="container.md" mx="auto" py={8}>
      <Image src={gambar} />
      <Heading as="h2" size="lg" mb={6}>
        <center>Create a Blog</center>
      </Heading>
      <form onSubmit={handleSubmit}>
        <Box borderWidth="1px" borderRadius="md" p={4}>
          <FormControl mb={4}>
            <FormLabel>Title</FormLabel>
            <Input placeholder="Input your tittle" type="text" id="title" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Image</FormLabel>
            <Input
              variant={""}
              type="file"
              onChange={handleImageUpload}
              accept=".jpg,.jpeg,.png,.gif"
              id="file"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Category</FormLabel>
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              style={{ width: "300px", alignItems: "center" }}
            >
              <option value="">Pilih Kategori</option>
              {category &&
                category.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
            </select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Content</FormLabel>
            {/* <div className="text-editor" id="content">
              <ReactQuill
                value={content}
                h={"200px"}
                onChange={handleContent}
                required
              ></ReactQuill>
            </div> */}
            <Textarea
              placeholder="Write your content"
              height={"300px"}
              mb={"20px"}
              id="content"
            ></Textarea>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Keywords</FormLabel>
            <Input
              type="text"
              placeholder="Keyword"
              id="keywords"
              mb={"20px"}
            />
            {/* <TagsInput
              value={selected}
              onChange={setSelected}
              name="keyword"
              placeHolder="enter keywords"
              id="keywords"
            />
            <em>press enter to add new tag</em> */}
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input id="country" type="text" placeholder="Country" />
          </FormControl>
          <Button colorScheme="blue" mt={4} type="submit">
            Publish
          </Button>
        </Box>
      </form>
    </Box>
  );
};
