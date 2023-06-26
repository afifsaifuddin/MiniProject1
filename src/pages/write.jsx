import React from "react";
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
  MenuList,
  Flex,
  MenuItem,
  Text,
  Link,
  MenuButton,
  Menu,
  Image,
  Select,
} from "@chakra-ui/react";

export const Write = () => {
  const [selected, setSelected] = useState([""]);
  const [content, setContent] = useState("");
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
  return (
    <Box maxW="container.md" mx="auto" py={8}>
      <Image src={gambar} />
      <Heading as="h2" size="lg" mb={6}>
        Create a Blog
      </Heading>
      {/* Form */}
      <Box borderWidth="1px" borderRadius="md" p={4}>
        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input placeholder="Input yout tittle" type="text" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Author</FormLabel>
          <Input placeholder="Input your name" type="text" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Image</FormLabel>
          <Input
            variant={""}
            type="file"
            onChange={handleImageUpload}
            accept=".jpg,.jpeg,.png,.gif"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Category</FormLabel>
          <Menu>
            <MenuButton as={Button}>Select your category</MenuButton>
            <MenuList>
              <MenuItem>Entertainment</MenuItem>
              <MenuItem>Teknology & Sains</MenuItem>
              <MenuItem>Bisnis</MenuItem>
              <MenuItem>Food & Travel</MenuItem>
              <MenuItem>Sports</MenuItem>
              <MenuItem>Otomotif</MenuItem>
            </MenuList>
          </Menu>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>News content</FormLabel>
          <div className="text-editor">
            <ReactQuill
              value={content}
              h={"200px"}
              onChange={handleContent}
              required
            ></ReactQuill>
          </div>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Keywords</FormLabel>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="keyword"
            placeHolder="enter keywords"
          />
          <em>press enter to add new tag</em>
        </FormControl>
        <Button colorScheme="blue" mt={4}>
          Publish
        </Button>
      </Box>

      {/* Message for non-verified users */}
      <Text mt={4}>
        You need to be a verified user to create a blog. Please{" "}
        <Link href="/Signup">verify your account</Link>.
      </Text>
    </Box>
  );
};
