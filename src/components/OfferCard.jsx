import './OfferCard.css'

export const OfferCard = () => {
    return (
        <section className='product-card'>
            <div className='img'>
                <img src="/img/nike.png" alt="nike" />
            </div>
            
            <div className='mainText'>
                <h5>
                    Oferta especial
                </h5>
                <h1>
                    Air Jordan edição de <br />colecionador
                </h1>
                <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.   
                    <br />Consequatur, aperiam repellat. Soluta maiores culpa expedita 
                    <br /> nostrum facilis tempora rem perspiciatis perferendis tenetur 
                    <br />dignissimos nemo, sit laborum aliquam doloremque iste mollitia!  
                </p>
                <button>Ver Oferta</button>
            </div>
        </section>
    )
}
