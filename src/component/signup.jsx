import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  FormErrorMessage,
  Link,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import gambar from "../7490271.png";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Toast } from "@chakra-ui/react";
import * as Yup from "yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import loginSuccess from "../redux/reducer/Authreducer";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  phone: Yup.string().min(8).required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be 7 characters minimum")
    .max(15, "Password must be less than 16 character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password not Match")
    .required("Consfirm password is required"),
});

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState(false);
  const toast = useToast();
  const fetchUser = async (values) => {
    try {
      const { username, phone, email, password, confirmPassword } = values;
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
        {
          username: username,
          phone: phone,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          FE_URL: "http://localhost:3000",
        }
      );
      toast({
        title: "Succes",
        description: "Check your Email to verified your account",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error.response.data);
      toast({
        title: "Error",
        description: error.response.data,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      username: "",
      confirmPassword: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
      fetchUser(values);
      localStorage.setItem("login", "true");
    },
  });
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Image src={gambar} />
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Already have account?
            <Link href="/Signin">Sign In</Link>
          </Text>
        </Stack>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <Box>
                <FormControl
                  sx={{
                    marginBottom: "25px",
                  }}
                  isInvalid={formik.touched.username && formik.errors.username}
                >
                  <FormLabel htmlFor="username">Username :</FormLabel>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <FormErrorMessage>
                      {formik.errors.username}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  sx={{
                    marginBottom: "25px",
                  }}
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <FormLabel htmlFor="email">Email :</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  sx={{
                    marginBottom: "25px",
                  }}
                  isInvalid={formik.touched.phone && formik.errors.phone}
                >
                  <FormLabel htmlFor="phone">phone :</FormLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                  )}
                </FormControl>
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
                    <FormErrorMessage>
                      {formik.errors.password}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  id="confirmPassword"
                  isInvalid={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                >
                  <FormLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FormLabel>
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
                          setConfirmpassword(
                            (confirmpassword) => !confirmpassword
                          )
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
              </Box>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"black"}
                  color={"white"}
                  _hover={{
                    bg: "#00C4FF",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}></Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
