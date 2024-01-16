import './ProductImageCarrousel.css'
import products from '../../../products.json'
import { useState } from 'react'

const product = products[0]


export const ProductImageCarrousel = () => {
    const [currentSrc,setCurrentSrc] = useState(product.images[0])

    return (
        <div className='carrouselContainer'>
            <div className='currentImage'>
                <button
                    className='sliderArrows'
                    onClick={() => {
                        const index = product.images.indexOf(currentSrc) - 1
                        setCurrentSrc(product.images[index])
                    }}
                ></button>
                <img src={currentSrc} alt="" />
                <button
                    className='sliderArrows right'
                ></button>
            </div>
            <div className='galleryImages'>
                {product.images.map((imageSrc,index) => 
                    <img
                        key={index}
                        src={imageSrc}
                        onClick={() => setCurrentSrc(imageSrc)}
                    />
                )}
            </div>
        </div>
    )
}