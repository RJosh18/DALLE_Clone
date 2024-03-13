import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.svg";
import { Home, CreatePost } from "./pages";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <header className="Header">
        <Link to="/">
          <img src={logo} alt="logo" className="Logo" />
        </Link>
        <Link to="/create-post" className="createPo">
          Create
        </Link>
      </header>
      <main className="Nav">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
