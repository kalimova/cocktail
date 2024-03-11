import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Card/>} path="/card"/> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
