import './MainFooter.css'

export const MainFooter = () => {
    return (
        <div className="MainFooter">
            <div className="footer-colum-digital">
                <h3><img src="../../src/assets/logo-DC.png" alt="Logo Digital-College" />Digital Store</h3>
                <p>Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore.</p>
                <div className='image-links'>
                    <a href="#"><img src="../../src/assets/icon-facebook.png" alt="" /></a>
                    <a href="#"><img src="../../src/assets/icon-instagram.png" alt="" /></a>
                    <a href="#"><img src="../../src/assets/icon-twitterx.png" alt="" /></a>
                </div>
            </div>
            <div className="footer-colum-informacao">
                <h4>Informação</h4>
                    <ul>
                        <li><a href="#">Sobre Drip Store</a></li>
                        <li><a href="#">Segurança</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Trabalhe conosco</a></li>
                        <li><a href="#">Meus Pedidos</a></li>
                    </ul>
            </div>
            <div className="footer-colum-informacao">
                <h4>Categorias</h4>
                    <ul>
                        <li><a href="#">Camisetas</a></li>
                        <li><a href="#">Calças</a></li>
                        <li><a href="#">Bonés</a></li>
                        <li><a href="#">Headphones</a></li>
                        <li><a href="#">Tênis</a></li>
                    </ul>
            </div>
            <div className="footer-colum-contato">
                <h4>Contato</h4>
                <p>Av. Santos Dumont, 1510 - 1 <br />
                andar - Aldeota, Fortaleza - <br />
                CE, 60150-161</p>
                <a href="#">(85) 3051-3411</a>
            </div>

            <div className="copyrigth">
                <p>@ 2022 Digital College</p>
            </div>
        </div>
    )
}
