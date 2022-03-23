import Category from "./components/Category";
import Menu from "./components/Menu";
import items from "./db/data";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import Demo from "./demo/demo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Open from "./demo/open";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Open />} />
        <Route path={"/demo"} element={<Demo />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
