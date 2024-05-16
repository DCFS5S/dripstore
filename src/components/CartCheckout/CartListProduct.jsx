import './CartList.css'

export const CartListProduct = () => {
  return (
    <div className='cart-list-product'>
        <div className='cart-product-image'>
            <img className='cart-product-image' src="/images/tenis.png" alt="" />
        </div>
        <div className='cart-product-information'>
            <p className='text-name'>Tênis Nike Revolution 6 Next Nature Masculino</p>
            <div className='price-container'>
              <p className='text-price'>R$<span>219,00</span></p>
              <p className='text-old-price'>R$<span>219,00</span></p>
            </div>
        </div>
    </div>
  )
}
