import { Link, Outlet, useLocation } from 'react-router-dom'
import './Pgto.css'

export const Pgto = () => {

  return(
    <>
      <div>
        <Outlet />
          <Link to='testepgto'>teste página</Link>
      </div>

      passo 1
      <div>
        <h1>Carteira</h1>

        <p>Adicione um método de pagamento</p>
      </div>

      <div>
        <p>Você não tem nenhum método de pagamento salvo.</p>
        <button>Adicionar forma de pagamento</button>
        
      </div>

      
    </>
  )
}
