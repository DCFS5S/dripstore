import { Link, useParams } from "react-router-dom"
import productsData from "../../../products.json"
import { apiRequest } from "../../service/apiRequest"

export const ProductDetails = () => {
    const { id } = useParams()

    const selectedProduct = productsData.find(product => id === product.id)

    const addToCart = () => {
        apiRequest({
            data: {
                productId: id,
            },
            method: 'POST',
            path: '/orders/add-product',
        })
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
