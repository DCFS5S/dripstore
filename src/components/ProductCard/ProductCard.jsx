import { useAddToCart } from '../../services/useAddToCart'
import { DiscountPill } from './DiscountPill/DiscountPill'
import { Price } from './Price/Price'
import './ProductCard.css'

export const ProductCard = ({ product }) => {
    const { addToCart } = useAddToCart()

    return (
        <div className="productCard" onClick={() => addToCart(product.id)}>
            {product.discount ? <DiscountPill discount={ product.discount } /> : ''}
            <img src={ product.imgSrc } />
            <span className="category">{ product.category }</span>
            <p className="product-description">{ product.name }</p>
            <Price price={ product.price } discount={ product.discount } />
        </div>
    )
}