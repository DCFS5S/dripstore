import './CartCheckList.css'
import { useState } from 'react'

export function CartCheckList({name, color, size, price, oldPrice}) {
    const [a, setA] = useState(1)

    const handleMinusClick = () => {
        setA(a - 1)
    }

    const handlePlusClick = () => {
        setA(a + 1)
    }

    const showVariable = () => {
        alert(a)
    }

    return (
        <div>
            <table>
                <thead>
                    <th>MEU CARRINHO</th>
                    <th></th>
                    <th>QUANTIDADE</th>
                    <th>UNITÁRIO</th>
                    <th>TOTAL</th>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={3}><img className='image' src="../images/tenis.png" alt="" /></td>
                        <td className='bold'>{name}</td>
                        <td className='center'>
                            <button onClick={handleMinusClick}>-</button> 
                            <span onClick={showVariable}> {a} </span>
                            <button onClick={handlePlusClick}>+</button></td>
                        <td className='old-price center' >{oldPrice}</td>
                        <td className='old-price center'>{oldPrice}</td>
                    </tr>
                    <tr>
                        <td>Cor: {color}</td>
                        <td className='center'><a href="#">Remover item</a></td>
                        <td className='center bold'>{price}</td>
                        <td className='center bold'>{price}</td>
                    </tr>
                    <tr>
                        <td>Tamanho: {size}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}


