import { API_URL } from "../constants"

export const useAddToCart = () => {
    const addToCart = (productId) => {
        fetch(`${ API_URL }/cart`, {
            method: 'POST',
            body: JSON.stringify({ productId })
        })
    }

    return { addToCart }
}