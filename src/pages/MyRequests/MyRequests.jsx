import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./MyRequests.css";

export const MyRequests = () => {
  return (
    <>
      <Header />
      <section className="main-request-container">

        <div className="sidebar-container">
          <ul>
            <li>
              <a href="#">Meu perfil</a>
              <hr />
            </li>
            <li>
              <a href="#">Meus Pedidos</a>
              <hr />
            </li>
            <li>
              <a href="#">Minhas Informações</a>
              <hr />
            </li>
            <li>
              <a href="#">Métodos de Pagamento</a>
            </li>
          </ul>
        </div>

        <div className="status-container">
          <div className="status-container-header">
            <h3>Meus pedidos</h3>
            <span>STATUS</span>
          </div>
          <hr />
          <p>Pedido nº 2234981932</p>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <h4>Produto em trânsito</h4>
          
          <hr />
          <p>Pedido nº 2234981932</p>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <h4>Finalizado</h4>
          
          <hr />
          <p>Pedido nº 2234981932</p>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <h4>Cancelado</h4>
          
          <hr />
          <p>Pedido nº 2234981932</p>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <h4>Finalizado</h4>
          
          <hr />
          <p>Pedido nº 2234981932</p>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <h4>Finalizado</h4>   
        </div>
      </section>
      <Footer />
    </>
  );
};
