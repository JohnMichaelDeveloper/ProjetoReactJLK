import React from 'react';

const Cabecalho = props => {
  return (
    <nav className='navbar navbar-transparent navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>                        
          </button>
          <a className='navbar-brand' href='#myPage'>Logo</a>
        </div>
        <div className='collapse navbar-collapse' id='myNavbar'>
          <ul className='nav navbar-nav navbar-right'>
            <li><a href='#about'>Home</a></li>
            <li><a href='#services'>Destino</a></li>
            <li><a href='#portfolio'>Promoção</a></li>
            <li><a href='#pricing'>Atendimento</a></li>
            <li><a href='#contact'>Entrar</a></li>
            <li><a href='#contact'>Cadastre-se</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
 export default Cabecalho;