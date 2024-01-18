import './ProductDetailsComponent.css'
import blankStar from '../../../img/blank-star.svg'

export const ProductDetailsComponent = () => {
   

    return (
        <>
            <div className='details-container'>
                <div> 
                    <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
                </div>

                <div className="paragraph">
                    <p>Casual | Nike | REF:38416711</p>
                </div>

                <div className='star1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M8.61294 1.2306L10.4622 5.65038L15.1966 6.06108C15.5249 6.08972 15.6585 6.50343 15.4092 6.72122L11.8182 9.86292L12.8943 14.5367C12.9689 14.8614 12.6204 15.1169 12.3383 14.9443L8.26965 12.4666L4.20097 14.9443C3.91814 15.1162 3.57037 14.8607 3.645 14.5367L4.72113 9.86292L1.12932 6.72047C0.88006 6.50268 1.0129 6.08896 1.342 6.06033L6.07636 5.64962L7.92562 1.2306C8.05398 0.923134 8.48458 0.923134 8.61294 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C"/>
                    </svg>
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M8.99624 1.2306L10.8455 5.65038L15.5799 6.06108C15.9082 6.08972 16.0418 6.50343 15.7925 6.72122L12.2015 9.86292L13.2776 14.5367C13.3522 14.8614 13.0037 15.1169 12.7216 14.9443L8.65295 12.4666L4.58427 14.9443C4.30144 15.1162 3.95367 14.8607 4.0283 14.5367L5.10443 9.86292L1.51262 6.72047C1.26336 6.50268 1.3962 6.08896 1.7253 6.06033L6.45966 5.64962L8.30892 1.2306C8.43728 0.923134 8.86788 0.923134 8.99624 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.381 1.2306L10.2303 5.65038L14.9646 6.06108C15.293 6.08972 15.4266 6.50343 15.1773 6.72122L11.5862 9.86292L12.6624 14.5367C12.737 14.8614 12.3885 15.1169 12.1064 14.9443L8.03772 12.4666L3.96904 14.9443C3.6862 15.1162 3.33844 14.8607 3.41307 14.5367L4.48919 9.86292L0.897382 6.72047C0.648127 6.50268 0.780963 6.08896 1.11007 6.06033L5.84442 5.64962L7.69369 1.2306C7.82205 0.923134 8.25264 0.923134 8.381 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M8.76675 1.2306L10.616 5.65038L15.3504 6.06108C15.6787 6.08972 15.8123 6.50343 15.5631 6.72122L11.972 9.86292L13.0481 14.5367C13.1227 14.8614 12.7742 15.1169 12.4921 14.9443L8.42346 12.4666L4.35478 14.9443C4.07194 15.1162 3.72418 14.8607 3.79881 14.5367L4.87493 9.86292L1.28312 6.72047C1.03387 6.50268 1.16671 6.08896 1.49581 6.06033L6.23017 5.64962L8.07943 1.2306C8.20779 0.923134 8.63839 0.923134 8.76675 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C"/>
                    </svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z" stroke="#F6AA1C"/>
                    </svg>
                    <div className='rate'>
                        <span>4.7</span>
                        <img src={blankStar} alt="" />
                    </div>
                    <p>(90 avaliações)</p>
                </div>
                <p className='money'>
                    <span className='currency'>R$</span>
                    219,00
                    <span className='old-price'>220,00</span>
                </p>
                <div className='product-description'>
                    <h3>Descrição do produto</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <p>Tamanho</p>
                <label>
                    <input type="radio" name="size" value={39} checked/>
                    39
                </label>
                <label>
                    <input type="radio" name="size" value={40}/>
                    40
                </label>
                <label>
                    <input type="radio" name="size" value={41}/>
                    41
                </label>
                <label>
                    <input type="radio" name="size" value={42}/>
                    42
                </label>
                <label>
                    <input type="radio" name="size" value={43}/>
                    43
                </label>
                <p>Cor</p>
                <div className='colors'>
                    <div className='color'></div>
                    <div className='color'></div>
                    <div className='color'></div>
                    <div className='color'></div>
                </div>
                <button className='buy'>COMPRAR</button>
            </div>
        </>
    )
}