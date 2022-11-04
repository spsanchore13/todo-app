import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  Container,
  Img,
  Input,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      axios
        .post("https://spsanchore-todos-server.onrender.com/login", values)
        .then((response) => {
          // console.log(response.data);
          localStorage.setItem("todo_app_token", response.data.token);
          navigate("/todos");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <Stack>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
        <VStack justify="center">
          <Img src="https://todogroup.org/img/og.png" />
        </VStack>
        <VStack spacing={10} h="80vh" p={10} justify="center">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <Input
              rounded="false"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              mb={5}
            />
            <label htmlFor="password">Password</label>
            <Input
              rounded="false"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              mb={5}
            />

            <Button colorScheme="blue" w="100%" type="submit">
              Submit
            </Button>
          </form>
        </VStack>
      </SimpleGrid>
    </Stack>
  );
};

export default Login;
