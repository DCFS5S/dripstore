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
                    <th className='thead bold'>MEU CARRINHO</th>
                    <th/>
                    <th className='thead'>QUANTIDADE</th>
                    <th className='thead'>UNITÁRIO</th>
                    <th className='thead'>TOTAL</th>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={3}><img className='image' src="../images/tenis.png" alt="" /></td>
                        <td className='name bold'>{name}</td>
                        <td className='center'>
                            <button onClick={handleMinusClick}>-</button> 
                            <span className='show-variable' onClick={showVariable}> {quantidade} </span>
                            <button onClick={handlePlusClick}>+</button></td>
                        <td className='old-price center' >
                            R$ <span>{oldPrice}</span>
                        </td>
                        <td className='old-price center'>
                            R$ <span>{oldPrice}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='cor gray'>
                            Cor: <span className='black'>{color}</span>
                        </td>
                        <td className='remove center'>
                            <a href="#">Remover item</a>
                        </td>
                        <td className='price center bold'>
                            R$ <span>{price}</span>
                        </td>
                        <td className='price center bold'>
                            R$ <span>{price}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='tamanho gray'>
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