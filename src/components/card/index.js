import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card shadow rounded m-4"
      onClick={() => props.selectCharacter(props.id)}
    >
      <div className="img-container">
        <img className="card-img-top" alt={props.name} src={props.image} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
    </div>
  );
}

export default Card;
