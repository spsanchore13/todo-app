import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TodoList = ({ _id, title, status }) => {
  const handleDelete = (_id) => {};
  //     axios({
  //       method: "DELETE",
  //       url: `https://spsanchore-todos-server.onrender.com/todos/${id}`,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("todo_app_token")}`,
  //       },
  //     })
  //       .then((res) => {
  //         setTodos(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <Stack>
      <Flex justifyContent="space-between">
        <HStack w="60%">
          <Text> {title}</Text>
        </HStack>
        <HStack>
          <Button w="100px" colorScheme={status == "true" ? "whatsapp" : "red"}>
            {status}
          </Button>
        </HStack>
        <HStack>
          <Button w="120px" colorScheme="red" onClick={() => handleDelete(_id)}>
            DELETE
          </Button>
        </HStack>
      </Flex>
    </Stack>
  );
};

export default TodoList;
