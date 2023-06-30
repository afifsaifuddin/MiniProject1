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
export const Changephone = () => {
  const toast = useToast();
  const ChangephoneScheme = Yup.object().shape({
    currentPhone: Yup.string().required("Phone Number is required"),
    newPhone: Yup.string().required("Phone Number is required"),
  });
  const Phone = async (values) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePhone",
        {
          currentPhone: values.currentPhone,
          newPhone: values.newPhone,
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
      toast({
        title: "Error",
        description: error.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      currentPhone: "",
      newPhone: "",
    },
    validationSchema: ChangephoneScheme,
    onSubmit: (values) => {
      Phone(values);
    },
  });
  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={"30px"} mb={"30px"}>
        Change Phone Number
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <Stack mr={"500px"}>
          <FormControl
            sx={{
              marginBottom: "25px",
            }}
            isInvalid={
              formik.touched.currentPhone && formik.errors.currentPhone
            }
          >
            <FormLabel htmlFor="currentPhone" fontWeight={"bold"}>
              Current Phone Number :
            </FormLabel>
            <Input
              id="currentPhone"
              name="currentPhone"
              type="text"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.currentPhone}
            />
            {formik.touched.currentPhone && formik.errors.currentPhone && (
              <FormErrorMessage>{formik.errors.currentPhone}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            sx={{
              marginBottom: "25px",
            }}
            isInvalid={formik.touched.newPhone && formik.errors.newPhone}
          >
            <FormLabel htmlFor="newPhone" fontWeight={"bold"}>
              New Phone Number :
            </FormLabel>
            <Input
              id="newPhone"
              name="newPhone"
              type="text"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.newPhone}
            />
            {formik.touched.newPhone && formik.errors.newPhone && (
              <FormErrorMessage>{formik.errors.newPhone}</FormErrorMessage>
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
