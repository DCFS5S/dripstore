import './CartWindow.css'
import { CartWindowProduct } from './CartWindowProduct'


export const CartWindow = ({ items, total }) => {

  return (
    <div className='cart-list'>
        <div className="cart-list-header">
            <h4>Meu Carrinho</h4>
        </div>
        <div className='cart-list-product-component'>
          {items && items.map(item => (
            <CartWindowProduct
              key={item.ID}
              name={item.name}
              imgSrc={item.imgSrc}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          ))}
        </div>
        <div className="cart-list-footer">
            <div className='price-container'>
              <p className='container-valor'><span className='text-valor'>Valor Total:</span></p>
              <p><span className='text-total-price'>R$ <span className='text-total-price'>{total ? total.toFixed(2).replace('.', ',') : '0,00'}</span></span></p>
            </div>
            <div className='btns-cart-list'>
              <button className='esvaziar-button'>Esvaziar</button>
              <button className='ver-carrinho-button'>Ver Carrinho</button>
            </div>
        </div>
    </div>
  )
}
