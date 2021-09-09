import React, { Component } from 'react';

const TableHead = () => {
    return(
        <thead>
        <tr>
          <th>Autores</th>
          <th>Livros</th>
          <th>Preços</th>
          <th>Remover</th>
        </tr>
     </thead>
    );
}



 const Tablebody = props => {

    const linhas = props.autores.map((linha, index) => {
         
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick = { () => { props.removeAutor(index) }} className="waves-effect waves-light btn amber accent-4">Remover</button></td>
            </tr>
        );
    });
     

  return(
    <tbody>
        {linhas}
    </tbody>
    );
}

class Tabela extends Component{
 
    render(){

 
const { autores, removeAutor } = this.props;
console.log(autores);

       return(
<table className="centered highlight">
         <TableHead />
         <Tablebody autores = { autores } removeAutor = { removeAutor } />
  
</table>

       );
   }
}
export default Tabela;