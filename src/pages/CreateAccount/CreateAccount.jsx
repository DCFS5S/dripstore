import { useState } from "react";
import { HeaderClean } from "../../components/HeaderClean/HeaderClean";
import "./CreateAccount.css";
import { useEffect } from "react";
import { Popup } from "../../components/Popup/Popup";

export const CreateAccount = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData')

    return savedData ? JSON.parse(savedData) : {nomeCompleto: ""}
  })

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCreateAccount = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
    <HeaderClean />
    <section className="create-account-container">
      <section className="create-account-content">
        <h3>Criar conta</h3>
        <div className="info-content">
          <p>Informações Pessoais</p>
          <hr />
          <label htmlFor="nomecompleto">Nome Completo *</label>
          <input 
            name='nomeCompleto'
            placeholder="Insira seu nome"
            type="text"
            value={formData.nomeCompleto}
            onChange={handleInputChange}
          />

          <label htmlFor="cpf">CPF *</label>
          <input placeholder="Insira seu CPF" type="text" />

          <label htmlFor="email">E-mail *</label>
          <input placeholder="Insira seu email" type="text" />

          <label htmlFor="celular">Celular *</label>
          <input placeholder="Insira seu celular" type="text" />
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
      </section>

    </section>

    <Popup 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      message={`${formData.nomeCompleto}, seu cadastro foi concluído com sucesso!`}
    />
    </>
  );
};
