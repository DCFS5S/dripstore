import './CartCheckList.css'

export function CartCheckList(props) {
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
                        <td>Tênis Nike Revolution 6 Next Nature Masculino</td>
                        <td>+ / -</td>
                        <td className='old-price'>R$ 219,00</td>
                        <td className='old-price'>R$ 219,00</td>
                    </tr>
                    <tr>
                        <td>Cor: Vermelho / Branco</td>
                        <td>Remover item</td>
                        <td>R$ 219,00</td>
                        <td>R$ 219,00</td>
                    </tr>
                    <tr>
                        <td>Tamanho: 42</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}


