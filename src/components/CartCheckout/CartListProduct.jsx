import './CartList.css'

export const CartListProduct = () => {
  return (
    <div className='cart-list-product'>
        <div className='cart-product-image'>
            <img className='cart-product-image' src="/images/tenis.png" alt="" />
        </div>
        <div className='cart-product-information'>
            <p className='text-name'>Tênis Nike Revolution 6 Next Nature Masculino</p>
            <p>
              <span className='text-price'>R$</span>
              <span className='text-price'>219,00</span>
              <span className='text-old-price'>R$</span>
              <span  className='text-old-price'>219,00</span>
            </p>
        </div>
    </div>
  )
}

