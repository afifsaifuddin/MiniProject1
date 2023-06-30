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
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Link,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import gambar from "../7490271.png";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { signIn } from "../Redux/Reducer/Authreducer";
import { useNavigate } from "react-router-dom";
import { Modalforgetpass } from "./modalforgetpass";

const LoginSchema = Yup.object().shape({
  identifier: Yup.string().required("Identifier is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/,
      "Password must be at least 6 characters, 1 symbol, and 1 uppercase"
    )
    .required("Password is required"),
});

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  // const login = useSelector((state) => state.authreducer.login);

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(signIn(values));
      // console.log("ini console", values);
      try {
        alert("Login Success");
        navigate("/");
      } catch (error) {
        alert("Login Failed");
      }
    },
  });
  return (
    <Box pb={"250px"} bgSize={"cover"} bgColor={"blue.100"}>
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
                <FormControl
                  sx={{
                    marginBottom: "25px",
                  }}
                  isInvalid={
                    formik.touched.identifier && formik.errors.identifier
                  }
                >
                  <FormLabel htmlFor="identifier">
                    Email/Username/Phone :
                  </FormLabel>
                  <Input
                    id="identifier"
                    name="identifier"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.identifier}
                  />
                  {formik.touched.identifier && formik.errors.identifier && (
                    <FormErrorMessage>
                      {formik.errors.identifier}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
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
                      color={"black "}
                      _hover={{ color: "#00C4FF" }}
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
    </Box>
  );
}
