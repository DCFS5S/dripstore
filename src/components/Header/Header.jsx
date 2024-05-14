import { Link } from 'react-router-dom'
import './Header.css'
import { CartList } from '../CartCheckout/CartList'
import { useState } from 'react'

export const Header = () => {
    const [showCartList, setShowCartList] = useState(false)
    
    const toggleCartList = () => {
         setShowCartList(!showCartList)
    }
    
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

                <Link to='/carrinho' onClick={toggleCartList}  className='kart-button'>
                    <img src="../../src/assets/Buy.svg" alt="Carrinho" />
                    <span>2</span>
                </Link>
            </div>

            <nav className="main-header-menu">
                <ul>
                    <li><Link to='/' className='home-bar'>Home</Link></li>
                    <li><Link to='/produtos' className='home-bar'>Produtos</Link></li>
                    <li><Link to='/categorias' className='home-bar'>Categorias</Link></li>
                    <li><Link to='/meus-pedidos' className='home-bar'>Meus Pedidos</Link></li>
                </ul>
            </nav>
            {showCartList && <CartList />}

        </div>
    )
}
