import React from "react";
import { render } from "react-dom";
import {RegisterApp} from "./Register";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {HomePage} from "./Home"

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterApp />} />
      </Routes>
  </Router>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv); 