import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/Navigation";
import FunctionBase from "./components/FunctionBase";
import ClassBased from "./components/ClassBased";

function App() {
  return (
    <div className="App">
      <Navigation />
      <FunctionBase />
      <ClassBased />
    </div>
  );
}

export default App;
