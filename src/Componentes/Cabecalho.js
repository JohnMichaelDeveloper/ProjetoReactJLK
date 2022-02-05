import React from 'react';
import {Link} from 'react-router-dom';
import { BsList } from 'react-icons/bs';
const Cabecalho = props => {
  return (
    <div> 
      {/* <nav id='navbarLink' className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>                        
            </button>
            <Link className='navbar-brand' to='/'>JLK</Link>
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav'>
              <li className='active'><Link to='/'>Inicio</Link></li>
              <li className='dropdown'>
                <Link className='dropdown-toggle' data-toggle='dropdown' to='#'>Promoções <span className='caret'></span></Link>
                <ul className='dropdown-menu'>
                  <li><Link to='/pacotes'>Pacotes</Link></li>
                  <li><Link to='/registrarPacotes'>Registrar Pacotes</Link></li>
                  <li><Link to='/listaDePacotes'>Lista de Pacotes</Link></li>
                </ul>
              </li>
              <li><Link to='/listaDeUsuarios'>Lista de Usário</Link></li>
              <li><Link to='/atendimento'>Atendimento</Link></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/cadastro'><span className='glyphicon glyphicon-user'></span> Cadastre-se</Link></li>
              <li><Link to='/login'><span className='glyphicon glyphicon-log-in'></span> Entrar</Link></li>
            </ul>
          </div>
        </div>
      </nav> */}

        <nav id='navbarLink'  className='nav-bar bg-warning'>
            <div>
                <Link to='Index'><img src='https://media.discordapp.net/attachments/871853660706058323/925117445776228352/logo-branco.png' alt='Logo' title='Viagens JLK' className='logo img-just' 
                /></Link>
            </div>
            <div className='right-items'>
              <div className='login-text'>
                <div className='menu-hamburger'>
                  <button id='button-hamburger'><BsList className='Dbuttom-hamburger' /></button>
                  <ul className='bg-warning drop-warning'>

                  <li><Link to='/' exact>Inicio</Link></li>
                  <li><Link to='/pacotes'>Pacotes</Link></li>
                  <li><Link to='/registrarPacotes'>Registrar Pacotes</Link></li>
                  <li><Link to='/listaDePacotes'>Lista de Pacotes</Link></li>
                  <li><Link to='/listaDeUsuarios'>Lista de Usário</Link></li>
                  <li><Link to='/atendimento'>Atendimento</Link></li>
                  <li><Link to='/cadastro'>Cadastre-se</Link></li>
                  <li><Link to='/login'>Entrar</Link></li>
                     
                  </ul>
                </div>
              </div>
            </div>
        </nav>

                    

      {/* <nav id='navbarLink' className='navbar navbar-transparent navbar-fixed-top'>
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
      </nav> */}

      <div className='jumbotron text-center' >
        <img src='img/home-bg-1.jpg' alt=''/>
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