import { Link } from 'react-router-dom'
import './Header.css'
import { CartList } from '../CartCheckout/CartList'
import { useEffect, useState, useRef } from 'react'

export const Header = () => {
    const [showCartList, setShowCartList] = useState(false)
    const cartListRef = useRef(null)
    
    const toggleCartList = (event) => {
        event.stopPropagation()
        setShowCartList(!showCartList)
    }

    const handleClickOutside = (event) => {
        if (cartListRef.current && !cartListRef.current.contains(event.target)) {
            setShowCartList(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleClickOutside)
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

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

                <button onClick={toggleCartList}  className='kart-button'>
                    <img src="../../src/assets/Buy.svg" alt="Carrinho" />
                    <span>2</span>
                </button>
            </div>

            <nav className="main-header-menu">
                <ul>
                    <li><Link to='/' className='home-bar'>Home</Link></li>
                    <li><Link to='/produtos' className='home-bar'>Produtos</Link></li>
                    <li><Link to='/categorias' className='home-bar'>Categorias</Link></li>
                    <li><Link to='/meus-pedidos' className='home-bar'>Meus Pedidos</Link></li>
                </ul>
            </nav>
            {showCartList && (
                <div ref={cartListRef}>
                    <CartList />
                </div>
            )}
        </div>
    )
}
