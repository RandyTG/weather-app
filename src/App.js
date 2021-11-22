import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import NotFound from "./utils/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
