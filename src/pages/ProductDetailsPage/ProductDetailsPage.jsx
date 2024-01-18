import { useParams } from 'react-router-dom'
import { ProductImageCarrousel } from '../../components/ProductImageCarrousel/ProductImageCarrousel'
import './ProductDetailsPage.css'

export const ProductDetailsPage = () => {
    const { productName } = useParams()

    return (
        <>
            <div className='fullPath'>
                <a href="">Home</a>
                <a href="">Produtos</a>
                <a href="">Tênis</a>
                <a href="">Nike</a>
                <a href="">Tênis Nike Revolution 6 Next Nature Masculino</a>
            </div>
            <div style={{position: 'relative', padding: '7%', width: '97dvw'}}>
                <ProductImageCarrousel />
            </div>
        </>
    )
}