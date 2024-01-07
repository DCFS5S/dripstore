import './Header.css'

export const Header = () => {
    return (
        <div className="main-header">
             <div className="main-header-content">
                <img className="logo" src="../../src/assets/logo.png" alt="" />
                    <div className="search-bar">
                        <input placeholder="Pesquisar produto..." className="main-header-search" type="search"/>
                        <img className="search-lupa" src="../../src/assets/Search.svg" alt=""/>
            </div>
                <a href="" className="register-link">Cadastre-se</a>
                <a href="" className="button" >Entrar</a>
                <button className="kart-button">
                <a href="#"><img src="../../src/assets/Buy.svg" alt="" /></a>
                <span>2</span>
                </button>
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
