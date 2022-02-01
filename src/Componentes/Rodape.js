import React from 'react'
import {Link} from 'react-router-dom';
const Rodape = props =>{
  return(
    <footer className='container-fluid text-center'>
      <Link to='/' title='To Top'>
        <span className='glyphicon glyphicon-chevron-up'></span>
      </Link>
      <p>Site criado por John Michael - <a href='https://github.com/JohnMichaelDeveloper' title='GitHub'>GitHub - 2022.</a></p>
      <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" title="Visit w3schools">www.w3schools.com</a></p>
    </footer>

  )

  
}
export default Rodape;