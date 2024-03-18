import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Home from "./components/Home";
import Details from "./components/Details";
import Margarita from "./components/Margarita";
import Modal from "./Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  const [isOpen, setIsOpen] = useState([]);
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [isToken, setIsToken] = useState("");

  return (
    <>
      {isToken.token ? <p></p> : <Modal setIsToken={setIsToken} />}
      <BrowserRouter>
        <Header setSearch={setSearch} />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            element={<Card setDetails={setDetails} setSearch={setSearch} />}
            path="/card"
          />
          <Route element={<Details details={details} />} path="/details" />
          <Route element={<Modal modal={Modal} />} path="/modal" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
