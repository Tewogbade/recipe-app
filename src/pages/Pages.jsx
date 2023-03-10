import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import SearchResult from "./SearchResult";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<SearchResult />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
