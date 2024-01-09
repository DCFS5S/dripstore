import { Link } from 'react-router-dom'
import { DiscountPill } from './DiscountPill/DiscountPill'
import { Price } from './Price/Price'
import './ProductCard.css'

export const ProductCard = ({product}) => {
    return (
        <Link className="productCard" to={`produto/${product.id}`}>
            {product.discount ? <DiscountPill discount={product.discount} /> : ''}
            <img src={product.imgSrc} />
            <span className="category">{product.category}</span>
            <p className="product-description">{product.name}</p>

            <Price price={product.price} discount={product.discount} />
        </Link>
    )
}