//importações externos


// importações da app
import React, {Component} from 'react';
import Site from './site';
import Rodape from './Componentes/Rodape';
import Cabecalho from './Componentes/Cabecalho';
import Inicio from './Componentes/Inicio';
import Pacotes from './Componentes/Pacotes';
import RegistrarPacotes from './Componentes/RegistrarPacotes';
import ListaDePacotes from './Componentes/ListaDePacotes';
import ListaDeUsuarios from './Componentes/ListaDeUsuarios';
import Cadastro from './Componentes/Cadastro';
import Login from './Componentes/Login';
import Atendimento from './Componentes/Atendimento';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Cabecalho />
        <Inicio />
        <Pacotes />
        <RegistrarPacotes />
        <ListaDePacotes />
        <ListaDeUsuarios />
        <Atendimento />
        <Cadastro />
        <Login />
        <Site />
        <Rodape />
      </div>
    );
  }
}

export default App;
