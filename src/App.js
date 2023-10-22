import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="restaurant/:id" element={<Details />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
