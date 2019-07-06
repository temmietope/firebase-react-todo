import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/pages/About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </>
      </Router>
    );
  }
}

export default App;
