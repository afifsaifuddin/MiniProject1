import { useToast } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  blog: [],
};

export const Blogreducer = createSlice({
  name: "Blogreducer",
  initialState,
  reducers: {
    getBlog: (state, action) => {
      state.blog = [...state.blog, ...action.payload];
    },
  },
});

export const createBlog = (data, file) => {
  return async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", file);
    try {
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      alert("Create Blog Succes");
      //   toast({
      //     title: "Success",
      //     description: res.data.message,
      //     status: "success",
      //     duration: 3000,
      //     isClosable: true,
      //   });
      document.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
};
export const { getBlog } = Blogreducer.actions;
export default Blogreducer.reducer;
