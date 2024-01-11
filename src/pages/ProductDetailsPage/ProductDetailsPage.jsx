import { useParams } from 'react-router-dom'
import { ProductImageCarrousel } from '../../components/ProductImageCarrousel/ProductImageCarrousel'
import './ProductDetailsPage.css'

export const ProductDetailsPage = () => {
    const { productName } = useParams()

    return (
        <div style={{position: 'relative', padding: '7%', width: '97dvw'}}>
            <ProductImageCarrousel />
        </div>
    )
}