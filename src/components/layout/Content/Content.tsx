import React from "react";
import { Routes, Route } from "react-router-dom";
import Favorites from "../../pages/Favorites/Favorites";
import Home from "../../pages/Home/Home";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="favorites" element={<Favorites />}></Route>
    </Routes>
  );
}

export default Content;
