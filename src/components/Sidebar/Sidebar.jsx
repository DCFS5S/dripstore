import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => {
  const location = useLocation()

  return(
    <>
      <div className="sidebar-container">
        <ul>
          <li>
            <Link to="meu-perfil">
              Meu Perfil
            </Link>
            <hr />
          </li>
          <li>
            <Link to="meus-pedidos" className={location.pathname === '/meuspedidos' ? 'active' : ''}>
              Meus Pedidos
            </Link>
            <hr />
          </li>
          <li>
            <Link to="minhas-informacoes">
              Minhas Informações
            </Link>
            <hr />
          </li>
          <li>
            <Link to="metodos-de-pagamento">Métodos de Pagamento</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
