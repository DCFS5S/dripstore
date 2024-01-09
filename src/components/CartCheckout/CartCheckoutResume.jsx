import React from 'react'
import './CartCheckoutResume.css'

const CartCheckoutResume = () => {
  return (
    <div className='resume'>
        <div>
          <h2 className='cart-resume-header'>RESUMO</h2>
        </div>
        
        <div className='body'>
          <div className='right-item1'>
             <p className='card'>Subtotal: </p>
             <p className='resume-price'>R$ <span>219,00</span></p>
          </div>

          <div className='right-item2'>
             <p className='card'>Frete: </p>
             <p className='resume-price'>R$ <span>0,00</span></p>
          </div>

          <div className='right-item3'>
            <p className='card'>Desconto: </p>
            <p className='resume-price'>R$ <span>30,00</span></p>
          </div>

          <div className='right-item4'>
            <p className='card'>Total </p>
            <p className='resume-price'>R$ <span>219,00</span></p>
          </div>  


          <div className='resume-button'>
            <button>Continuar</button>
          </div>
        </div>
        
    </div>
  )
}

export default CartCheckoutResume
