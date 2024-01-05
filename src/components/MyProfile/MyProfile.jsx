import { Link } from "react-router-dom"
import "./MyProfile.css"

export const MyProfile = () => {

  return(
    <>
      <div>
        <h1>Meu Perfil</h1>
        <h2>Olá [Nome], seja bem-vindo!</h2>
      </div>
      
    <section className="box-content">
        <Link to="/meus-pedidos/meus-pedidos" className="box">Meus Pedidos</Link>

        <Link to="/meus-pedidos/minhas-informacoes" className="box">Minhas Informacoes</Link>
    </section>
    </>
  )
}
