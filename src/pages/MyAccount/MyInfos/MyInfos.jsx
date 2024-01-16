import './MyInfos.css'

export const MyInfos = () => {
  return(
    <>
      <div className='my-infos-content'>
        <h2>Informações Pessoais</h2>
        <p>Nome: </p><span>Francisco</span>
        <p>CPF: </p><span>123.456.789-00</span>
        <p>Email: </p><span>francisco@gmail.com</span>
        <p>Celular: </p><span>(85) 9.8765-4321</span>

        <hr />

        <h2>Informações de Entrega</h2>
        <p>Endereço: </p><span>Rua João Pessoa</span>
        <p>Bairro: </p><span>Centro</span>
        <p>Cidade: </p><span>Fortaleza, Ceará</span>
        <p>CEP: </p><span>60000-000</span>
      </div>
    </>
  )
}
