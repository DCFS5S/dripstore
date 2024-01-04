import { ProductCard } from "../ProductCard/ProductCard"
import './ProductList.css'

export const ProductList = ({products}) => {
    return (
        <div className="productList">
            {products.map(productData => <ProductCard product={productData} />)}
        </div>
    )
}