import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { HStack, Stack } from "@chakra-ui/react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://spsanchore-todos-server.onrender.com/todos",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("todo_app_token")}`,
      },
    })
      .then((res) => {
        setTodos(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Stack p={10}>
      <HStack>
        <AddTodo />
      </HStack>
      <Stack border="1px solid red" w="70%">
        {todos.map((todo) => (
          <TodoList {...todo} key={todo._id} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Todos;
