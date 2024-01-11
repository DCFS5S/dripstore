import sneaker from '../../../img/White-Sneakers-Nike.png'
import './ProductImageCarrousel.css'

export const ProductImageCarrousel = () => {
    return (
        <div className='carrouselContainer'>
            <div className='currentImage'>
                <img src={sneaker} alt="" />
                <button> &lt; </button>
                <button> &gt; </button>
            </div>
            <div className='galleryImages'>
                <img src={sneaker} alt="" />
                <img src={sneaker} alt="" />
                <img src={sneaker} alt="" />
                <img src={sneaker} alt="" />
                <img src={sneaker} alt="" />
            </div>
        </div>
    )
}