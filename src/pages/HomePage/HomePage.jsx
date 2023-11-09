import { ProductCard } from '../../components/ProductCard/ProductCard'
import { ProductList } from '../../components/ProductList/ProductList'
import './HomePage.css'

const productsData = [
    {
        category: 'Tenis',
        discount: 30,
        imgSrc: '/assets/img/featured-product.png',
        name: 'K-Swiss V8 - Masculino',
        price: 200,
    },
    {
        category: 'Camisa',
        imgSrc: '/assets/img/featured-product.png',
        name: 'Camisa Preta Masculina',
        price: 100,
    },
    {
        category: 'Camisa',
        discount: 20,
        imgSrc: '/assets/img/featured-product.png',
        name: 'Camisa Preta Masculina',
        price: 100,
    },
    {
        category: 'Camisa',
        imgSrc: '/assets/img/featured-product.png',
        name: 'Camisa Preta Masculina',
        price: 100,
    },
    {
        category: 'Camisa',
        imgSrc: '/assets/img/featured-product.png',
        name: 'Camisa Preta Masculina',
        price: 100,
    },
]

export const HomePage = () => {
    return (
        <>
            <ProductList products={productsData} />
        </>
    )
}