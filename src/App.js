import React, { Component } from "react";
import Jumbotron from "./components/jumbotron/"
import Navbar from "./components/navbar/"
import Game from "./components/game"

import "./App.css";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div className="parallax" />
        <Jumbotron />       
        <Game />
      </div>
    );
  }
}

export default App;
