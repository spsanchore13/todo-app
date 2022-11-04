import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Todos from "../Components/Todos";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};

export default AllRoutes;
