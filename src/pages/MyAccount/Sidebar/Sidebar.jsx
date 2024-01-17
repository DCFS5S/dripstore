import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => {
  const location = useLocation()

  return(
    <>
      <div className="sidebar-container">
        <ul>
          <li>
            <Link to="meu-perfil" className={location.pathname === '/meus-pedidos/meu-perfil' ? 'active' : ''}>
              Meu Perfil
            </Link>
            <hr />
          </li>
          <li>
            <Link to="meus-pedidos" className={location.pathname === '/meus-pedidos/meus-pedidos' ? 'active' : ''}>
              Meus Pedidos
            </Link>
            <hr />
          </li>
          <li>
            <Link to="minhas-informacoes" className={location.pathname === '/meus-pedidos/minhas-informacoes' ? 'active' : ''}>
              Minhas Informações
            </Link>
            <hr />
          </li>
          <li>
            <Link to="metodos-de-pagamento/page-cartao1" className={location.pathname === '/meus-pedidos/metodos-de-pagamento/page-cartao1' ? 'active' : ''}>Métodos de Pagamento</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
