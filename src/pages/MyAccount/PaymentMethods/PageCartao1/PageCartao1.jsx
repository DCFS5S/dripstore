import { Link } from 'react-router-dom'
import './PageCartao1.css'

export const PageCartao1 = () => {
  return(
    <>
        <h1>Carteira</h1>
      <div className='page-cartao'>

        <p>Você não tem nenhum método de pagamento salvo.</p>
        
        <Link to='#'>
          Adicionar forma de pagamento
        </Link>
      </div>
    </>
  )
}
