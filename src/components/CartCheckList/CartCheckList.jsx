import './CartCheckList.css'

export function CartCheckList() {
    return (
        <div className='container'>
            <div className='menu'>
                <ul>
                    <li>MEU CARRINHO</li>
                    <li>QUANTIDADE</li>
                    <li>UNITÁRIO</li>
                    <li>TOTAL</li>
                </ul>
            </div>
            <div className='produto'>
                <div className='imagem'>
                    <img src="" alt="" />
                </div>
                <div className='conteudo'>
                    <div className='descricao'>
                        <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                        <p>Cor: Vermelho / Branco</p>
                        <p>Tamanho: 42</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


