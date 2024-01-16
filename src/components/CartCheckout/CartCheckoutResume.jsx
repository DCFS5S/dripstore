import './CartCheckoutResume.css'

export const CartCheckoutResume = ({ total }) => {
  return (
    <div className='resume'>
        <div>
          <h2 className='cart-resume-header'>RESUMO</h2>
        </div>
        
        <div className='body'>
          <div className='right-itens right-itens-text'>
             <p className='card'>Subtotal: </p>
             <p className='resume-price'><span>R$</span> <span>{total.toFixed(2).replace('.', ',')}</span></p>
          </div>

          <div className='right-itens right-itens-text'>
             <p className='card'>Frete: </p>
             <p className='resume-price'><span>R$</span> <span>0,00</span></p>
          </div>

          <div className='right-itens right-itens-text'>
            <p className='card'>Desconto: </p>
            <p className='resume-price'><span>R$</span> <span>30,00</span></p>
          </div>

          <div className='total-item total-item-text'>
            <p className='card'>Total </p>
            <p className='resume-price'><span>R$</span> <span>{total.toFixed(2).replace('.', ',')}</span></p>
          </div>  
          <div className='parcelamento'>
            <p>ou 10x de R$<span>{(total/10).toFixed(2).replace('.', ',')}</span>sem juros</p>
          </div>
          <div>
            <button className='resume-button'>Continuar</button>
          </div>
        </div>
        
    </div>
  )
}


