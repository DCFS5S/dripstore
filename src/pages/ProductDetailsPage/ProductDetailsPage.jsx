import { useParams } from 'react-router-dom'
import { ProductDetailsComponent } from '../../ProductDetailsComponent/ProductDetailsComponent'

export const ProductDetailsPage = () => {
    const { productName } = useParams()

    return (
        <div style={{display:'flex'}}>
            <div style={{width: '50%'}}></div>
            <ProductDetailsComponent/>
        </div>
    )
}