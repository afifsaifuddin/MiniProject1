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
export const Changeemail = () => {
  const toast = useToast();
  const ChangeemailScheme = Yup.object().shape({
    currentEmail: Yup.string().required("Email is required"),
    newEmail: Yup.string().required("Email is required"),
  });
  const Email = async (values) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePhone",
        {
          currentEmail: values.currentEmail,
          newEmail: values.newEmail,
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
      currentEmail: "",
      newEmail: "",
    },
    validationSchema: ChangeemailScheme,
    onSubmit: (values) => {
      Email(values);
    },
  });
  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={"30px"} mb={"30px"}>
        Change Email Address
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <Stack mr={"500px"}>
          <FormControl
            sx={{
              marginBottom: "25px",
            }}
            isInvalid={
              formik.touched.currentEmail && formik.errors.currentEmail
            }
          >
            <FormLabel htmlFor="currentEmail" fontWeight={"bold"}>
              Current Email :
            </FormLabel>
            <Input
              id="currentEmail"
              name="currentEmail"
              type="text"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.currentEmail}
            />
            {formik.touched.currentEmail && formik.errors.currentEmail && (
              <FormErrorMessage>{formik.errors.currentEmail}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            sx={{
              marginBottom: "25px",
            }}
            isInvalid={formik.touched.newEmail && formik.errors.newEmail}
          >
            <FormLabel htmlFor="newEmail" fontWeight={"bold"}>
              New Email :
            </FormLabel>
            <Input
              id="newEmail"
              name="newEmail"
              type="text"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.newEmail}
            />
            {formik.touched.newEmail && formik.errors.newEmail && (
              <FormErrorMessage>{formik.errors.newEmail}</FormErrorMessage>
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
