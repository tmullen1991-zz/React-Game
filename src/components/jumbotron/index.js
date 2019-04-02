import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="text-center align-middle">Archer Click Game!</h1>
        <h4 className="text-center">Click images to get a higher score. Don't Click the same one twice!</h4>
      </Jumbotron>
    );
  }
}
export default App