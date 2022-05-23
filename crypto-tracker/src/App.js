import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CoinList from "./components/CoinList";
import CoinDetails from "./components/CoinDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoinList />} />
        <Route path="/:id" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
