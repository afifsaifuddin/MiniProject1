import { Navbar } from "./navbar";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Link,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import gambar from "../7490271.png";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";
import * as Yup from "yup";
import {
  Email,
  Phone,
  loginSuccess,
  userName,
} from "../Redux/Reducer/Authreducer";
import { useNavigate } from "react-router-dom";
import { Modalforgetpass } from "./modalforgetpass";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be 7 characters minimum")
    .max(15, "Password must be less than 16 character")
    .required("Password is required"),
  username: Yup.string().required(""),
  phone: Yup.string().required(""),
});

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const fetchUser = async (values) => {
    try {
      const { email, password, username, phone } = values;
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
        {
          username: username,
          phone: phone,
          email: email,
          password: password,
        }
      );
      if (res.status === 200) {
        dispatch(loginSuccess(res.data.token));
        dispatch(userName(res.data.isAccountExist.username));
        dispatch(Phone(res.data.isAccountExist.phone));
        dispatch(Email(res.data.isAccountExist.email));
        // console.log(res);
        toast({
          title: res.data.message,
          description: "Login Success",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Account not verified",
        status: "success",
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
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      fetchUser(values);
    },
  });
  return (
    <>
      <Flex>
        <Stack spacing={5} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Image src={gambar} />

            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <Text align={"center"}>
              Note have an account?
              <Link href="/Signup">Sign Up</Link>
            </Text>
          </Stack>
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={2}>
                {/* <FormControl
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
                </FormControl> */}
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
                {/* <FormControl
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
                </FormControl> */}
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

                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Button
                      variant={""}
                      color={"#00C4FF "}
                      onClick={() => {
                        onOpen();
                      }}
                    >
                      Forget Password
                    </Button>
                  </Stack>
                  <Button
                    bg={"black"}
                    color={"white"}
                    _hover={{
                      bg: "#00C4FF",
                    }}
                    type="submit"
                    // onClick={() => dispatch(loginSuccess(), navigate("/"))}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
      <Modalforgetpass isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
