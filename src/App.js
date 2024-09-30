import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
