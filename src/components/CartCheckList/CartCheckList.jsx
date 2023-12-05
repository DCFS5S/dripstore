import './CartCheckList.css'
import { useState } from 'react'

export function CartCheckList({name, color, size, price, oldPrice}) {
    const [quantidade, setQuantidade] = useState(1)

    const handleMinusClick = () => {
        if(quantidade > 0) {
            setQuantidade(quantidade - 1)
        }
    }

    const handlePlusClick = () => {
        setQuantidade(quantidade + 1)
    }

    const showVariable = () => {
        alert(quantidade)
    }

    return (
        <div>
            <table>
                <thead>
                    <th className='bold'>MEU CARRINHO</th>
                    <th/>
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
                            <span className='show-variable' onClick={showVariable}> {quantidade} </span>
                            <button onClick={handlePlusClick}>+</button></td>
                        <td className='old-price center' >{oldPrice}</td>
                        <td className='old-price center'>{oldPrice}</td>
                    </tr>
                    <tr>
                        <td className='gray'>
                            Cor: <span className='black'>{color}</span>
                        </td>
                        <td className='center'><a href="#">Remover item</a></td>
                        <td className='center bold'>{price}</td>
                        <td className='center bold'>{price}</td>
                    </tr>
                    <tr>
                        <td className='gray'>
                            Tamanho: <span className='black'>{size}</span>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}