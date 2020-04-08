import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import FunctionBase from "./components/FunctionBase";
import ClassBased from "./components/ClassBased";
import Button from "react-bootstrap/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/FunctionBase" component={FunctionBase} />
          <Route path="/ClassBased" component={ClassBased} />
        </Switch>
        <Footer tahun="2020" />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="container mt-5 py-5 border">
      <h1 className="mb-5">Choose your To Do List</h1>
      <Link to="/FunctionBase">
        <Button className="mr-2" variant="dark">
          Function Base
        </Button>
      </Link>
      <Link to="/ClassBased">
        <Button className="ml-2" variant="dark">
          Class Based
        </Button>
      </Link>
    </div>
  );
};

export default App;
