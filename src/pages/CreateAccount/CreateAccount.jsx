import { useState } from "react";
import { HeaderClean } from "../../components/HeaderClean/HeaderClean";
import "./CreateAccount.css";
import { useEffect } from "react";
import { Popup } from "../../components/Popup/Popup";
import { apiRequest } from "../../service/apiRequest";

export const CreateAccount = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData')

    return savedData ? JSON.parse(savedData) : {nomeCompleto: ""}
  })

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])


  const handleCreateAccount = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataJson = Object.fromEntries(formData.entries());

    apiRequest({
        method: 'POST',
        data: formDataJson,
        path: '/users',
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <>
    <HeaderClean />
    <section className="create-account-container">
      <form className="create-account-content" onSubmit={handleSubmit}>
        <h3>Criar conta</h3>
        <div className="info-content">
          <p>Informações Pessoais</p>
          <hr />
          <label htmlFor="name">Nome Completo *</label>
          <input 
            id="name"
            name='name'
            placeholder="Insira seu nome"
            type="text"
          />

          <label htmlFor="cpf">CPF *</label>
          <input
            id="cpf"
            name="cpf"
            placeholder="Insira seu CPF"
            type="text"
          />

          <label htmlFor="email">E-mail *</label>
          <input
            id="email"
            name="email"
            placeholder="Insira seu email"
            type="text"
          />

          <label htmlFor="phone">Celular *</label>
          <input
            id="phone"
            name="phone"
            placeholder="Insira seu celular"
            type="text"
          />
          
          <label htmlFor="password">Senha *</label>
          <input
            id="password"
            name="password"
            placeholder="Insira sua senha"
            type="password"
          />
        </div>

        <div className="info-content">
          <p>Informações de Entrega</p>
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

        <button onClick={handleCreateAccount}>Criar conta</button>
      </form>
    </section>

    <Popup 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      message={`${formData.nomeCompleto}, seu cadastro foi concluído com sucesso!`}
    />
    </>
  );
};
