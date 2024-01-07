import './Header.css'

export const Header = () => {
  return (
    <>
      <div className='header-container'>
        <div className='header-menu'>
          <h1>Digital Store</h1>
          <input placeholder='Pesquisar produto' type="text" />
          <a href="#">Cadastre-se</a>
          <a className='button' href="#">Entrar</a>
          <span>Carrinho</span>
        </div>
        <div className='header-nav'>
          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>Categorias</li>
            <li>Meus pedidos</li>
          </ul>
        </div>
      </div>
    </>
  )
}
