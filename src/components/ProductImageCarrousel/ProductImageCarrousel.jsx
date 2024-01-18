import './ProductImageCarrousel.css'
import products from '../../../products.json'
import { useState } from 'react'

const product = products[0]


export const ProductImageCarrousel = () => {
    const [currentSrc,setCurrentSrc] = useState({
        index: 0,
        src: product.images[0]
    })
    

    return (
        <div className='carrouselContainer'>
            <div className='currentImage'>
                <button
                    className='sliderArrows'
                    onClick={() => {
                        if (currentSrc.index > 0) {
                            const index = currentSrc.index - 1
                            setCurrentSrc({
                                index,
                                src: product.images[index]
                            })
                        }
                    }}
                ></button>
                <img src={currentSrc.src} alt="" />
                <button
                    className='sliderArrows right'
                    onClick={() => {
                        if (currentSrc.index < product.images.length-1) {
                            const index = currentSrc.index + 1
                            setCurrentSrc({
                                index,
                                src: product.images[index]
                            })
                    }
                }}
                ></button>
            </div>
            <div className='galleryImages'>
                {product.images.map((imageSrc,index) => 
                    <img
                        key={index}
                        src={imageSrc}
                        onClick={() => setCurrentSrc({
                            index,
                            src: imageSrc
                        })}
                    />
                )}
            </div>
        </div>
    )
}