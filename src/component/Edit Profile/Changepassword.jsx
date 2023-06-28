import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";

import { useFormik } from "formik";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
export const Changepassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState(false);
  const [currentpassword, setCurrentpassword] = useState(false);
  const toast = useToast();
  const ChangepassScheme = Yup.object().shape({
    currentPassword: Yup.string().required("Password is required"),
    password: Yup.string()
      .min(7, "Password must be 7 characters minimum")
      .max(15, "Password must be less than 16 character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password not Match")
      .required("Consfirm password is required"),
  });
  const Password = async (values) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass",
        {
          currentPassword: values.currentPassword,
          password: values.password,
          confirmPassword: values.confirmPassword,
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
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: ChangepassScheme,
    onSubmit: (values) => {
      Password(values);
    },
  });
  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={"30px"} mb={"30px"}>
        Change Password
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <Stack mr={"500px"}>
          <FormControl
            id="currentPassword"
            isInvalid={
              formik.touched.currentPassword && formik.errors.currentPassword
            }
          >
            <FormLabel htmlFor="currentPassword">Current Password</FormLabel>
            <InputGroup>
              <Input
                type={currentpassword ? "text" : "password"}
                id="currentPassword"
                name="currentPassword"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.currentPassword}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={""}
                  onClick={() =>
                    setCurrentpassword((currentPassword) => !currentPassword)
                  }
                >
                  {currentpassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {formik.touched.currentPassword &&
              formik.errors.currentPassword && (
                <FormErrorMessage>
                  {formik.errors.currentPassword}
                </FormErrorMessage>
              )}
          </FormControl>
          <FormControl
            id="password"
            isInvalid={formik.touched.password && formik.errors.password}
          >
            <FormLabel htmlFor="password">New Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={""}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {formik.touched.password && formik.errors.password && (
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            id="confirmPassword"
            isInvalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          >
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <InputGroup>
              <Input
                type={confirmpassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={""}
                  onClick={() =>
                    setConfirmpassword((confirmpassword) => !confirmpassword)
                  }
                >
                  {confirmpassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <FormErrorMessage>
                  {formik.errors.confirmPassword}
                </FormErrorMessage>
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
