import React from "react";
import { Box } from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";
export const Changeusername = () => {
  const ChangeusenameScheme = Yup.object().shape({
    currentUsername: Yup.string().required("Username is required"),
    newUsername: Yup.string().required("Username is required"),
  });
  const userName = async (values) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changeUsername",
        {
          currentUsername: values.currentUsername,
          newUsername: values.newUsername,
          FE_URL: "http://localhost:3000",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return <Box>Changeusername</Box>;
};
