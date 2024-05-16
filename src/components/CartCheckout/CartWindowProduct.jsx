import './CartWindow.css'

export const CartWindowProduct = ({ name, imgSrc, price, oldPrice }) => {
  
  return (
    <div className='cart-list-product'>
        <div className='cart-product-image'>
            <img className='cart-product-image' src={imgSrc} alt={name} />
        </div>
        <div className='cart-product-information'>
            <p className='text-name'>{name}</p>
            <p className='price-container'>
              <p className='text-price'>R$<span>{price ? price.toFixed(2).replace('.', ',') : '0,00'}</span></p>
              <p className='text-old-price'>R$<span>{oldPrice? oldPrice.toFixed(2).replace('.', ',') : '0,00'}</span></p>
            </p>
        </div>
    </div>
  )
}
