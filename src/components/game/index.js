import React from "react";
import characters from "../../characters.json";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterList: characters,
      score: 0,
      topScore: 0,
      active: ""
    };
  }

  lost() {
    this.setState({ score: 0 });
  }

  score() {
    let score = this.state.score;
    score = score + 1;
    this.setState({ score: score });
    this.state.topScore <= score
      ? this.setState({ topScore: score })
      : console.log(this.state.topScore);
  }

  selectCard = name => {
    this.state.active === name ? this.lost() : this.score();
    this.setState({ active: name });
  };

  shuffleCards() {
    var shuffle = require("shuffle-array");
    let characterList = shuffle(characters);
    this.setState({ characterList });
  }

  render() {
    return (
      <div>
        <main className="container">
          <h1 className="text-center">Score: {this.state.score}</h1>
          <h1 className="text-center">TopScore: {this.state.topScore}</h1>
          <div
            className="row text-center m-auto p-5"
            onClick={() => this.shuffleCards()}
          >
            {this.state.characterList.map(character => (
              <div
                className="card shadow rounded m-auto"
                onClick={() => this.selectCard(character.name)}
                key={character.id}
              >
                <div className="img-container">
                  <img
                    className="card-img-top"
                    alt={character.name}
                    src={character.image}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}
export default App;
