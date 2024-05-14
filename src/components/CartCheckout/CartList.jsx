import './CartList.css'
import { CartListProduct } from './CartListProduct'


export const CartList = () => {
  const handleClick = (event) => {
    event.stopPropagation();
  }

  return (
    <div className='cart-list' onClick={handleClick}>
        <div className="cart-list-header">
            <h4>Meu Carrinho</h4>
        </div>
        <div className='cart-list-product-component'>
           <CartListProduct />
           <CartListProduct />
        </div>
        <div className="cart-list-footer">
            <p className='container-valor'><span className='text-valor'>Valor Total:</span> <span className='text-total-price'>R$ <span className='text-total-price'>219,00</span></span></p>
            <button className='esvaziar-button'>Esvaziar</button>
            <button className='ver-carrinho-button'>Ver Carrinho</button>
        </div>
    </div>
  )
}

