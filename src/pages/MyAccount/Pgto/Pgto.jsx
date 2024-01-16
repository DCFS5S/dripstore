import './Pgto.css'

export const Pgto = () => {
  return(
    <>
      <div>
        passo 1
        <h1>Carteira</h1>

        <p>Adicione um método de pagamento</p>
      </div>

      <div>
        <p>Você não tem nenhum método de pagamento salvo.</p>
        <button>Adicionar forma de pagamento</button>

      </div>

      <div>
        passo 2
        <h2>Adicione uma nova forma de pagamento</h2>
        <hr />

        <h3>Cartões de débito</h3>
        <p>A Amazon aceita várias bandeiras de cartão de débito.</p>
        <button>Adicionar um cartão de débito</button>
        <hr />

        <h3>Cartões de crédito</h3>
        <p>A Amazon aceita várias bandeiras de cartão de crédito.</p>
        <button>Adicionar um cartão de crédito</button>

      </div>
    </>
  )
}
