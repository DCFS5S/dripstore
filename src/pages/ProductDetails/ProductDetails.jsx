import { Link, useParams } from "react-router-dom"
import productsData from "../../../products.json"

export const ProductDetails = () => {
    const { id } = useParams()

    const selectedProduct = productsData.find(product => id === product.id)

    const addToCart = () => {
        fetch(
            'https://6578d273f08799dc804619b0.mockapi.io/api/v1/cart',
            {
                method: 'POST',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({ productId: id })
            }
        )
    }

    if (!selectedProduct) {
        return <p>Produto não encontrado</p>
    }

    const { name, price } = selectedProduct

    return (
        <div>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/carrinho'>Carrinho</Link>
            <h1>{name}</h1>
            <p>R$ {price}</p>

            <button onClick={addToCart}>Comprar</button>
        </div>
    )
}