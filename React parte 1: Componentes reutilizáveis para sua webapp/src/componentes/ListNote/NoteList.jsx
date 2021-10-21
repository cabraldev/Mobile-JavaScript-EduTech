import React, { Component } from "react";
import Card from "../Card/Card.jsx";
import "../ListNote/ListaNotas.css"


class NoteList extends Component {
  constructor(props){
    super(props)
    
  }
 
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index ) => {
          return (
            <li className="lista-notas_item" key={index} >
              
              <Card />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;