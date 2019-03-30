import React, { Component } from "react";
import characters from "./characters.json";
import Card from "./components/card/";
import Jumbotron from "./components/jumbotron/"
import Navbar from "./components/navbar/"
import AnswerCard from "./components/answer-card"
import "./App.css";

class App extends Component {

  state = {
    characters
  };

  selectCharacter = id => {
    console.log(this.state.characters[0].answer)
    const characters = this.state.characters.filter(
      character => character.id === id
    );
    this.setState({ characters });
    console.log(characters);
  };

  

  render() {
    return (
      <div>
        <Navbar/>
        <div className="parallax" />
        <Jumbotron />
        <div className="row text-center m-auto p-5">
        <AnswerCard />
        </div>
        <div className="row text-center m-auto p-5">
          {this.state.characters.map(character => (
            <Card
              selectCharacter={this.selectCharacter}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              answer={character.answer}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
