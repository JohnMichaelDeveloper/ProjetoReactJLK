import React from 'react';
import {Link} from 'react-router-dom';
const Cabecalho = props => {
  return (
    <div> 
      <nav id="navbarLink" className='navbar navbar-transparent navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>                        
            </button>
            <Link className='navbar-brand' to='/'>JLK</Link>
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/pacotes'>Pacotes</Link></li>
              <li><Link to='/registrarPacotes'>Registrar Pacotes</Link></li>
              <li><Link to='/listaDePacotes'>Lista de Pacotes</Link></li>
              <li><Link to='/listaDeUsuarios'>Lista de Usário</Link></li>
              <li><Link to='/atendimento'>Atendimento</Link></li>
              <li><Link to='/login'>Entrar</Link></li>
              <li><Link to='/cadastro'>Cadastre-se</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='jumbotron text-center'>
        <h1>Viaje com JLK</h1> 
        <p>Promoções especiais</p> 
        <form>
          <div className='input-group'>
            <input type='email' className='form-control' size='50' placeholder='Email Address' required />
            <div className='input-group-btn'>
            <button type='button' className='btn btn-danger'>Inscreva-se</button>
            </div>          

          </div>
        </form>
      </div>
    </div>
    
  )
}
 export default Cabecalho;