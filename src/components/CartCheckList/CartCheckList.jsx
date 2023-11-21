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
                        <td>+ / -</td>
                        <td className='old-price'>{oldPrice}</td>
                        <td className='old-price'>{oldPrice}}0</td>
                    </tr>
                    <tr>
                        <td>Cor: {color}</td>
                        <td>Remover item</td>
                        <td>{price}</td>
                        <td>{price}</td>
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


