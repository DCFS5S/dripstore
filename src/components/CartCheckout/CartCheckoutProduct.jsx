import { useState } from 'react'
import './CartCheckout.css'

export const CartCheckoutProduct = ({ ID, name, imgSrc, color, size, price, oldPrice, onRemove }) => {
    const [quantidade, setQuantidade] = useState(1)

    const handleMinusClick = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1)
        }
    }

    const handlePlusClick = () => {
        setQuantidade(quantidade + 1)
    }

    const showVariable = () => {
        alert(quantidade)
    }

    const handleRemoveItem = async () => {
        const hasUserConfirmed = confirm('Tem certeza que deseja remover o item?')
        if (hasUserConfirmed) {
            await fetch('https://6578d273f08799dc804619b0.mockapi.io/api/v1/cart/' + ID , { method: 'DELETE' })
            onRemove()
        }
    }

    const calculateTotal = () => {
        const priceNumber = parseFloat(price);
        const quantidadeNumber = parseInt(quantidade)
    
        if (!isNaN(priceNumber) && !isNaN(quantidadeNumber)) {
            return priceNumber * quantidadeNumber
        } else {
            return 0
        }
    }

    const calculateOldPriceTotal = () => {
        const oldPriceNumber = parseFloat(oldPrice);
        const quantidadeNumber = parseInt(quantidade)
    
        if (!isNaN(oldPriceNumber) && !isNaN(quantidadeNumber)) {
            return oldPriceNumber * quantidadeNumber
        } else {
            return 0
        }
    }

  return (
    <div>
      <div className='product-container'>
            <div className='sub-container left-container'>
                <div className='image-container'>
                    <img className='image' src={ imgSrc } alt={ name } />
                </div>
                <div className='props-product-container'>
                    <p className='text-product bolder'>{ name }</p>
                    <p className='text-product lightgray'>Cor: <span className='darkgray'>{ color }</span></p>
                    <p className='text-product lightgray'>Tamanho: <span className='darkgray'>{ size }</span></p>
                </div>
            </div>
            <div className='sub-container right-container'>
                <div className='right-item'>
                    <button onClick={handleMinusClick}>-</button>
                        <span className='show-variable' onClick={showVariable}> {quantidade} </span>
                    <button onClick={handlePlusClick}>+</button>
                    <button onClick={handleRemoveItem} className="remove-button">Remover item</button>
                </div>
                <div className='right-item'>
                    {oldPrice && (
                        <>
                            <p className='old-price'>R$ <span>{oldPrice}</span></p>
                            <p className='price'>R$ <span>{price}</span></p>
                        </>
                    )}
                    {!oldPrice && (
                        <p className='price'>R$ <span>{price}</span></p>
                    )}
                </div>
                <div className='right-item'>
                    {oldPrice && (
                        <>
                            <p className='old-price'>R$ <span>{calculateOldPriceTotal().toFixed(2).replace('.', ',')}</span></p>
                            <p className='price'>R$ <span>{calculateTotal().toFixed(2).replace('.', ',')}</span></p>
                        </>
                    )}
                    {!oldPrice && (
                        <p className='price'>R$ <span>{calculateTotal().toFixed(2).replace('.', ',')}</span></p>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}


