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
                    ID: cartItem.id,
                }
            }
            )
        )
    }


    useEffect(() => {
        loadCartItems()
    }, [])


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
                            price={(item.price).toFixed(2).replace('.', ',')}
                            {...(item.discount > 0 ? { oldPrice: (item.price / (1 - item.discount / 100)).toFixed(2).replace('.', ',') } : null)}
                            onRemove={loadCartItems}
                        />
                    ))}
                </section>
                <div className='discount-container'>
                    <div className='left-container inputs-container'>
                        <h3>Cupom de desconto</h3>
                        <input className='input-container' type="text" name="desc" id="desc" placeholder='Insira seu código' />
                        <button className='ok-button'>OK</button>
                    </div>
                    <div className='right-container inputs-container'>
                        <h3>Calcular frete</h3>
                        <input className='input-container' type="text" name="cep" id="cep" placeholder='Insira seu CEP' />
                        <button className='ok-button'>OK</button>
                    </div>
                </div>
            </div>
            <div className='resume-container'><CartCheckoutResume/></div>          
        </div>
    )
}