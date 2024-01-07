import { Footer } from "../../components/Footer/Footer";
import "./CreateAccount.css";

export const CreateAccount = () => {
  return (
    <>
    <section className="create-account-container">
      <section className="create-account-content">
        <h1>Criar conta</h1>
        <div className="personal-information">
          <h2>Informações Pessoais</h2>
          <hr />
          <label htmlFor="nomecompleto">Nome Completo *</label>
          <input placeholder="Insira seu nome" type="text" />

          <label htmlFor="cpf">CPF *</label>
          <input placeholder="Insira seu CPF" type="text" />

          <label htmlFor="email">E-mail *</label>
          <input placeholder="Insira seu email" type="text" />

          <label htmlFor="celular">Celular</label>
          <input placeholder="Insira seu celular" type="text" />
        </div>

        <div className="delivery-information">
          <h2>Informações de Entrega</h2>
          <hr />
          <label htmlFor="endereço">Endereço *</label>
          <input placeholder="Insira seu endereço" type="text" />

          <label htmlFor="bairro">Bairro *</label>
          <input placeholder="Insira seu bairro" type="text" />

          <label htmlFor="cidade">Cidade *</label>
          <input placeholder="Insira sua cidade" type="text" />

          <label htmlFor="cep">CEP *</label>
          <input placeholder="Insira seu CEP" type="text" />

          <label htmlFor="complemento">Complemento</label>
          <input placeholder="Insira complemento" type="text" />
        </div>

        <div className="notification">
          <input type="checkbox" name="" id="" />
          <p>
            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
          </p>
        </div>

        <a href="#">Criar conta</a>
      </section>

    </section>
    <Footer />
    </>
  );
};
