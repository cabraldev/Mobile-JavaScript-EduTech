import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import './App.css';

class App extends Component {
  
  state = {
  
    autores: [
      {
        nome:'Paulão',
        livro:'React',
        preco:'1000',
      },
      {
        nome:'Chicão',
        livro:'Java',
        preco:'99',
      },
      {
        nome:'Tião',
        livro:'Design',
        preco:'150',
      },
      {
        nome:'Quick',
        livro:'DevOps',
        preco:'100',
      }
    ],

  };
  

  escutadorDeSubmit = autor => {
    this.setState({ autores: [ ...this.state.autores, autor]})
  }
  removeAutor = index => {

    const { autores } = this.state;
  
    this.setState({
      autores : autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    })
  
  }
  
    render() {
      return (
      <Fragment>
        <Header />
        <div className="container md-10">
        <Tabela autores={this.state.autores} removeAutor = { this.removeAutor }/>  
       <Form escutadorDeSubmit = {this.escutadorDeSubmit} />
        </div>
      </Fragment>
        );
    }
  }
  
  export default App;
