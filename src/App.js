//importações externos
import {BrowserRouter, Route} from 'react-router-dom';


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
      <BrowserRouter>
      <div className="App">
        <Cabecalho />

        <Route path='/' exact component={Inicio} />
        <Route path='/pacotes' component={Pacotes} />
        <Route path='/registrarPacotes' component={RegistrarPacotes} />
        <Route path='/listaDePacotes' component={ListaDePacotes} />
        <Route path='/listaDeUsuarios' component={ListaDeUsuarios} />
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Cadastro} />
               

        <Rodape />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
