import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";

import { useFormik } from "formik";
export const Changeusername = () => {
  const toast = useToast();
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
      console.log(res);
      toast({
        title: "Success",
        description: res.data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      //   toast({
      //     title: "Error",
      //     description: error.data.message,
      //     status: "error",
      //     duration: 3000,
      //     isClosable: true,
      //   });
    }
  };
  const formik = useFormik({
    initialValues: {
      currentUsername: "",
      newUsername: "",
    },
    validationSchema: ChangeusenameScheme,
    onSubmit: (values) => {
      userName(values);
    },
  });
  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={"30px"} mb={"30px"}>
        Change Username
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <Stack mr={"500px"}>
          <FormControl
            sx={{
              marginBottom: "25px",
            }}
            isInvalid={
              formik.touched.currentUsername && formik.errors.currentUsername
            }
          >
            <FormLabel htmlFor="currentUsername" fontWeight={"bold"}>
              Current Username :
            </FormLabel>
            <Input
              id="currentUsername"
              name="currentUsername"
              type="text"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.currentUsername}
            />
            {formik.touched.currentUsername &&
              formik.errors.currentUsername && (
                <FormErrorMessage>
                  {formik.errors.currentUsername}
                </FormErrorMessage>
              )}
          </FormControl>
          <FormControl
            sx={{
              marginBottom: "25px",
            }}
            isInvalid={formik.touched.newUsername && formik.errors.newUsername}
          >
            <FormLabel htmlFor="newUsername" fontWeight={"bold"}>
              New Username :
            </FormLabel>
            <Input
              id="newUsername"
              name="newUsername"
              type="text"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.newUsername}
            />
            {formik.touched.newUsername && formik.errors.newUsername && (
              <FormErrorMessage>{formik.errors.newUsername}</FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit" bgColor={"#00C4FF"}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
