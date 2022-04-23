import React, { Component } from "react";
import { render } from "react-dom";
import {RegisterApp} from "./Register";

function App() {
  return (
      <div>
        <RegisterApp />
      </div>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);