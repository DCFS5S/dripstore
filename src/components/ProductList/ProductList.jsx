import { ProductCard } from "../ProductCard/ProductCard"
import './ProductList.css'

export const ProductList = ({products}) => {
    return (
        <div className="productList">
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}