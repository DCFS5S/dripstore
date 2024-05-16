import './CartCheckout.css'
import { useEffect, useState } from 'react'
import productsData from "../../../products.json"
import { CartCheckoutResume } from './CartCheckoutResume'
import { CartCheckoutProduct } from './CartCheckoutProduct'

export const CartCheckout = () => {
    const [items, setItems] = useState([])
    
    const loadCartItems = async () => {
        const response = await fetch('https://6578d273f08799dc804619b0.mockapi.io/api/v1/cart')
        const result = await response.json()

        setItems(
            result.map(cartItem => {
                const product = productsData.find(product => product.id === cartItem.productId)
                return {
                    ...product,
                    amount: 1,
                    ID: cartItem.id,
                }
            }
            )
        )
    }

    useEffect(() => {
        loadCartItems()
    }, [])

   const calculateSubTotal = () => {
    let total = 0

    items.forEach(item => {
        total += item.price * item.amount
    })

    return total
   }

    const handleChangeAmount = (ID, newAmount) => {
        const newItems = items.map(item => {
            if (item.ID === ID && newAmount > 0) {
                return {
                    ...item,
                    amount: newAmount
                }
            }

            return item
        })

        setItems(newItems)        
    }


    return (
        <div className='cart-checkout'>
            <div className='cart-checkout-container'>
                <div className='cart-checkout-header'>
                    <div className='left-container left-header'>
                        <h3>MEU CARRINHO</h3>
                    </div>
                    <div className='right-container right-header'>
                        <h3 className='right-item'>QUANTIDADE</h3>
                        <h3 className='right-item'>UNITÁRIO</h3>
                        <h3 className='right-item'>TOTAL</h3>
                    </div>
                </div>
                <section>
                    {items.map(item => (
                        <CartCheckoutProduct
                            key={item.id}
                            ID={item.ID}
                            name={item.name}
                            imgSrc={item.imgSrc}
                            color="Vermelho / Branco"
                            size="42"
                            price={item.price}
                            amount={item.amount}
                            {...(item.discount > 0 ? { oldPrice: (item.price / (1 - item.discount / 100))} : null)}
                            onRemove={loadCartItems}
                            onChangeAmount={handleChangeAmount}
                        />
                    ))}
                </section>
                
                <div className='discount-container'>
                    <div className='left-container inputs-container'>
                        <p className='text-style'>Cupom de desconto</p>
                        <input className='input-container' type="text" name="desc" id="desc" placeholder='Insira seu código' />
                        <button className='ok-button'>OK</button>
                    </div>
                    <div className='right-container inputs-container'>
                        <p className='text-style'>Calcular frete</p>
                        <input className='input-container' type="text" name="cep" id="cep" placeholder='Insira seu CEP' />
                        <button className='ok-button'>OK</button>
                    </div>
                </div>
            </div>
            <div className='resume-container'>
                <CartCheckoutResume
                    total = {calculateSubTotal()}
                />
            </div>       
        </div>
    )
}
