import React from "react";
import characters from "../../characters.json";
import "./style.css";

class App extends React.Component {
  constructor (props){
    super(props);
  
    this.state = {
        characterList: characters,
        wins: 0,
        losses: 0,
        active: false
      };
  }

  selectCard = name => {
  
    console.log(name);
  };

  shuffleCards() {
    var shuffle = require('shuffle-array')
    let characterList = shuffle(characters)
    this.setState({characterList})
  }

  render() {
    //let characterList = this.shuffleCards()
    //console.log(characterList)
    return (
      <div className="row text-center m-auto p-5" onClick={()=>this.shuffleCards()}>
        {this.state.characterList.map(character =>
      <div
      className="card shadow rounded m-4"
      onClick={() => this.selectCard(character.name)}
      key={character.id}
    >
      <div className="img-container">
        <img className="card-img-top" alt={character.name} src={character.image} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
      </div>
    </div>
        )}
      </div>
    );
  }
}
export default App;
