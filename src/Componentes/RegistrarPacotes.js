import React from 'react';
import {BsFillPlusCircleFill} from 'react-icons/bs';
const RegistrarPacotes = props =>{
  return(    
    
    <div id='registrarPacotes' className='container-fluid text-center bg-grey'>

<main className='fundo-color min-vh-100' >
    <div className='cadastro-content d-flex justify-content-around'>  
    <div>
        {/* <div className='icone-titulo'><img className='icones-content' src='~/img/icone-suitcase.png'/><h3 className='titulos'>REGISTRO DE PACOTES</h3></div> */}
        <div className='icone-titulo'><BsFillPlusCircleFill /><h3 className='titulos'>REGISTRO DE PACOTES</h3></div>
        <form className='form-style' action='Registro_Pacotes' method='POST'>

            <label className='label-style' asp-for='nome'>Nome:</label>
            <input className='input-style' asp-for='nome' name='nome' required placeholder='Nome do pacote' maxlength='20'/>

            <label className='label-style' asp-for='origem'>Origem:</label>
            <input className='input-style' asp-for='origem' name='origem' required placeholder='Local de origem'/>

            <label className='label-style' asp-for='destino'>Destino:</label>
            <input className='input-style' asp-for='destino' name='destino' required placeholder='Local de destino'/>

            <label className='label-style' asp-for='saida'>Data de saída:</label>
            <input className='input-style' asp-for='saida' name='saida' required placeholder='dd/mm/dd' maxlength='10'/>

            <label className='label-style' asp-for='retorno'>Data de retorno:</label>
            <input className='input-style' asp-for='retorno' name='retorno' required placeholder='dd/mm/dd' maxlength='10'/>

            <label className='label-style' asp-for='preco'>Preço:</label>
            <input className='input-style' asp-for='preco' name='preco' required placeholder='Preço do pacote'/>

                       
            <input type='submit' value='Registrar' className='input-button'/>

        </form>
     
     
</div>

    <div className='bloco-texto paragrafos d-none d-lg-block'>
        <h3 className='titulos'>REGISTRO DE PACOTES DE VIAGEM</h3>
        <p>Preecha os dados do pacote utilizando o formulário ao lado e use o botão 'Registrar' para salva-lo no sistema.</p>
    </div>

</div>


</main>


      {/* <h2>Promoções</h2><br />
      <h4>What we have created</h4>
      <div className='row text-center '>
        <div className='col-sm-4'>
          <div className='thumbnail'>
            <img src='paris.jpg' alt='Paris' width='400' height='300'/>
            <p><strong>Paris</strong></p>
            <p>Yes, we built Paris</p>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='thumbnail'>
            <img src='newyork.jpg' alt='New York' width='400' height='300'/>
            <p><strong>New York</strong></p>
            <p>We built New York</p>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='thumbnail'>
            <img src='sanfran.jpg' alt='San Francisco' width='400' height='300'/>
            <p><strong>San Francisco</strong></p>
            <p>Yes, San Fran is ours</p>
          </div>
        </div>
      </div><br />
      
      <h2>What our customers say</h2>
      <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
        
        <ol className='carousel-indicators'>
          <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
          <li data-target='#myCarousel' data-slide-to='1'></li>
          <li data-target='#myCarousel' data-slide-to='2'></li>
        </ol>

        
        <div className='carousel-inner' role='listbox'>
          <div className='item active'>
            <h4>'This company is the best. I am so happy with the result!'<br /><span>Michael Roe, Vice President, Comment Box</span></h4>
          </div>
          <div className='item'>
            <h4>'One word... WOW!!'<br /><span>John Doe, Salesman, Rep Inc</span></h4>
          </div>
          <div className='item'>
            <h4>'Could I... BE any more happy with this company?'<br /><span>Chandler Bing, Actor, FriendsAlot</span></h4>
          </div>
        </div>

        
        <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
          <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
          <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div> */}
    </div>
  )
}
export default RegistrarPacotes;