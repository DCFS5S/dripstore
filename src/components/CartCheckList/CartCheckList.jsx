import './CartCheckList.css'

export function CartCheckList({name, color, size, price, oldPrice}) {
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
                        <td rowSpan={3}><img className='image' src="../public/images/tenis.png" alt="" /></td>
                        <td>{name}</td>
                        <td className='center'>+ / -</td>
                        <td className='old-price center' >{oldPrice}</td>
                        <td className='old-price center'>{oldPrice}</td>
                    </tr>
                    <tr>
                        <td>Cor: {color}</td>
                        <td className='center'><a href="">Remover item</a></td>
                        <td className='center'>{price}</td>
                        <td className='center'>{price}</td>
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


