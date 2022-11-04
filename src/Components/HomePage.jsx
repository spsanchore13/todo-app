import React from "react";
import { Stack, Container, Text, Img } from "@chakra-ui/react";
import Navbar from "./Navbar";
const HomePage = () => {
  return (
    <>
      <Stack w="100%" h="90vh" border="1px solid black">
        <Img
          w="100%"
          src="https://media.istockphoto.com/id/1339879736/photo/hand-of-a-woman-writing-appointments-in-a-diary-organizer-or-schedule-calendar-with-a-lot-of.jpg?b=1&s=170667a&w=0&k=20&c=tfipUUGWN3uWaBBVlfLvJ5Wm3W-j3XrrgwHsg7Vnx7o="
        />
      </Stack>
    </>
  );
};

export default HomePage;
