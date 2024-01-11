import sneaker from '../../../img/White-Sneakers-Nike.png'
import sneaker2 from '../../../img/Nike.png'
import './ProductImageCarrousel.css'

export const ProductImageCarrousel = () => {
    return (
        <div className='carrouselContainer'>
            <div className='currentImage'>
                <img src={sneaker} alt="" />
                <button className='right'> &lt; </button>
                <button className='left'> &gt; </button>
            </div>
            <div className='galleryImages'>
                <img src={sneaker} alt="" />
                <img src={sneaker2} alt="" />
                <img src={sneaker2} alt="" />
                <img src={sneaker2} alt="" />
                <img src={sneaker2} alt="" />
            </div>
        </div>
    )
}