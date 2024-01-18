import { useParams } from 'react-router-dom'
import { ProductDetailsComponent } from '../../components/ProductDetailsComponent/ProductDetailsComponent.jsx'

export const ProductDetailsPage = () => {
    const { productName } = useParams()

    return (
        <div style={{display:'flex'}}>
            <div style={{width: '50%'}}></div>
            <ProductDetailsComponent/>
        </div>
    )
}