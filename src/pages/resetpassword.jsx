import React, { useState } from "react";
import {
  Box,
  Text,
  Stack,
  Input,
  Button,
  InputRightElement,
  FormLabel,
  FormControl,
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
export const Resetpassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState(false);
  const ResetpassScheme = Yup.object().shape({
    password: Yup.string()
      .min(7, "Password must be 7 characters minimum")
      .max(15, "Password must be less than 16 character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password not Match")
      .required("Consfirm password is required"),
  });
  async function resetPass(values) {
    const url = window.location.href.split("/");
    const token = url.pop();
    try {
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/resetPass",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      document.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  }
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: ResetpassScheme,
    onSubmit: (values) => {
      resetPass(values);
      navigate("/Signin");
    },
  });
  return (
    <Box my={"200px"} mx={"500px"}>
      <Box>
        <Text fontSize={"4xl"} fontWeight={"extrabold"} mb={"30px"}>
          Reset Password
        </Text>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={"10px"}>
          <FormControl
            id="password"
            isInvalid={formik.touched.password && formik.errors.password}
          >
            <FormLabel htmlFor="password">Password</FormLabel>
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
          <Button type="submit" _hover={{ bgColor: "blue.200" }}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
