import { useNavigate } from "react-router-dom"
import "./MyProfile.css"

export const MyProfile = () => {

  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return(
    <>
      <div>
        <h1>Meu Perfil</h1>
        <h2>Olá [Nome], seja bem-vindo!</h2>
      </div>
      
      <section className="box-content">
        
        <div className="box" onClick={() => handleNavigation('/meus-pedidos/meus-pedidos')}>
          <h2>Meus Pedidos</h2>
          <span>Rastrear, devolver ou comprar produtos novamente</span>
        </div>

        <div className="box" onClick={() => handleNavigation('/meus-pedidos/minhas-informacoes')}>
          <h2>Minhas Informações</h2>
        </div>

        <div className="box" onClick={() => handleNavigation('/meus-pedidos/metodos-de-pagamento')}>
          <h2>Métodos de Pagamento</h2>
        </div>
      </section>
    </>
  )
}
