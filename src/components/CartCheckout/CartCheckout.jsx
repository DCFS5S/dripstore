import './CartCheckout.css'
import { useEffect, useState } from 'react'
import { CartCheckoutRow } from './CartCheckoutRow'
import productsData from "../../../products.json"


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
        <div>
            <table>
                <thead>
                    <tr>
                        <th className='bold'>MEU CARRINHO</th>
                        <th />
                        <th>QUANTIDADE</th>
                        <th>UNITÁRIO</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <CartCheckoutRow
                            key={item.id}
                            ID={item.ID}
                            name={item.name}
                            color="Vermelho / Branco"
                            size="42"
                            price="219,00"
                            oldPrice="219,00"
                            onRemove={loadCartItems}
                        />
                    ))}
                </tbody>
            </table>
            <hr />
            <div className='inputs-container'>
                <div>
                    <h3>Cupom de desconto</h3>
                    <input type="text" name="desc" id="desc" placeholder='Insira seu código' />
                    <button>OK</button>
                </div>
                <div>
                <h3>Calcular frete</h3>
                    <input type="text" name="cep" id="cep" placeholder='Insira seu CEP' />
                    <button>OK</button>
                </div>
            </div>
        </div>

    )
}