import React from "react";
import characters from "../../characters.json";
import Card from "../card/";
import "./style.css";

class App extends React.Component {
  state = {
    characters
  };
  /*componenetDidMount() {
    let id = Math.floor(Math.random() * 9);
    const characters = (this.state.characters[id].answer = true);
    this.setState({ characters });
    console.log(characters)
  }*/

  render() {

    const characters = this.state.characters;
    const answer = characters.filter(character => character.answer === true)
    return (
      <Card
        id={answer.id}
        key={answer.id}
        name={answer.name}
        image={answer.image}
        answer={answer.answer}
      />
    );
  }
}
export default App;
