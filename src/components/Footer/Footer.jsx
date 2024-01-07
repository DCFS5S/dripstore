import './Footer.css'

export const Footer = () => {
  return(
    <>
    <section className='main-footer'>

      <section className='links'>
        <div className='footer-content'>
          <ul>
            <li>
              <h1>Digital Store</h1>
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, ut quia deleniti et eius deserunt porro dolores.
            </li>
          </ul>
        </div>

        <div className='footer-content'>
          <ul>
            <h3>Informação</h3>
            <li>Drip Store</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
          </ul>
        </div>

        <div className='footer-content'>
          <ul>
            <h3>Categorias</h3>
            <li>Camisetas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
          </ul>
        </div>

        <div className='footer-content'>
          <ul>
            <h3>Contato</h3>
            <li>
              Av.Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150161
            </li>
            <li>
              (85) 3051-3411
            </li>
          </ul>
        </div>
      </section>

      <hr />
      <div className='footer-copyright'>
        <p>&copy; 2022 Digital College</p>
      </div>
    </section>
    </>
  )
}
