import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Header>
    </Router>
  );
};

export default App;
