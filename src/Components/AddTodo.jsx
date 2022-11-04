import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";

const AddTodo = () => {
  return (
    <HStack w="70%">
      <Input type="text" placeholder="Add Something" />
      <Button type="submit">Submit</Button>
    </HStack>
  );
};

export default AddTodo;
