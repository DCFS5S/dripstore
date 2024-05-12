import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
        <div className="main-header">
            <div className="main-header-content">
                <Link to='/'>
                    <img className="logo" src="../../src/assets/logo.png" alt="" />
                </Link>

                <div className="search-bar">
                    <input placeholder="Pesquisar produto..." className="main-header-search" type="search"/>
                    <img className="search-lupa" src="../../src/assets/Search.svg" alt=""/>
                </div>
                
                <Link to='/criar-conta' className='register-link'>
                    Cadastre-se
                </Link>

                <Link to='/login' className='button'>
                    Entrar
                </Link>

                <Link to='/carrinho' className='kart-button'>
                    <img src="../../src/assets/Buy.svg" alt="Carrinho" />
                    <span>2</span>
                </Link>
            </div>
                <nav className="main-header-menu">
                    <ul>
                        <li> <a className="home-bar" href="">Home</a></li>
                        <li> <a className="home-bar" href="">Produtos</a></li>
                        <li> <a className="home-bar" href="">Categorias</a></li>
                        <li> <a className="home-bar" href="">Meus pedidos</a></li>  
                    </ul>
                </nav>
        </div>
    )
}
