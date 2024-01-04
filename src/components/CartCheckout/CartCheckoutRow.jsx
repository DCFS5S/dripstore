import { useState } from "react"

export const CartCheckoutRow = ({ ID, name, color, size, price, oldPrice, onRemove }) => {
    const [quantidade, setQuantidade] = useState(1)

    const handleMinusClick = () => {
        if (quantidade > 0) {
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


    return (
        <>
            <tr>
                <td rowSpan={3}><img className='image' src="../images/tenis.png" alt="" /></td>
                <td className='bold'>{name}</td>
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
                <td className='gray'>
                    Cor: <span className='black'>{color}</span>
                </td>
                <td className='center'>
                    <button onClick={handleRemoveItem}>Remover item</button>
                </td>
                <td className='price center bold'>
                    R$ <span>{price}</span>
                </td>
                <td className='price center bold'>
                    R$ <span>{price}</span>
                </td>
            </tr>
            <tr>
                <td className='gray'>
                    Tamanho: <span className='black'>{size}</span>
                </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </>
    )
}