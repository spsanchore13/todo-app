import React from "react";
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
const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("https://spsanchore-todos-server.onrender.com/signup", {
          name: values.name,
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          // console.log(response);
          navigate("/login");
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
        <VStack spacing={10} h="80vh" p={10}>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <Input
              rounded="false"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              mb={5}
            />
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

export default Signup;
