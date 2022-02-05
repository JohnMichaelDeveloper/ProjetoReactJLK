import React from 'react';

const Pacotes = props =>{
  return(
    <div id='pacotes' className='container-fluid text-center'>

 <main className='fundo-color h-75 d-inline-block'> 
      <div className='pacotes-content d-flex justify-content-around'>  
          <div>
              <div className='icone-titulo'><img className='icones-content' src='/public/img/icone-pacotes.png'/><h3 className='titulos'>PACOTES</h3></div>
          </div>
          <a  asp-action='Listar_Pacotes'><img src='/public/img/icone-shopping.png' className='icones-content' id='icone-sacola'/></a>
          
      </div>
      <div className='d-flex justify-content-around'>
        <p className='paragrafos '>Aproveite agora os descontos exclusivos com parcelamento em até 15x sem juros! Não perca essa chance, compre e viaje quando quiser!</p>
      </div>
          
      <div className='pacotes-cards mt-3 justify-content-center'>

        <div className='cards cards-text card06'> 
          <div className='card-button'>

          {/* Permissões */}

          {/* Permissões */}
    <a className='button' href='/Home/Excluir_Pacotes?id=@p.id'><img src='/public/img/icone-close.png' title='Remover' className='icones-content'/></a>
    </div>       
<h6>@p.nome</h6>
<p>Saindo de @p.origem <br/>Saída: @p.saida<br/>Retorno: @p.retorno<br/>Preço ida e volta de: <br/><i>R$ @p.preco</i></p>
</div>    

</div>
</main> 


     
    </div>
  )

}
export default Pacotes;