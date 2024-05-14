import { useState } from "react"

export const useAddToCart = () => {
    const [loading, setLoading] = useState(false); 

    const addToCart = async (productId) => {
        console.log({productId});
        setLoading(true);

        const currentOrderId = localStorage.getItem('orderId') ?? ''
        const response = await fetch('http://localhost:3000/orders/' + currentOrderId, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ productId })
        })

        const { orderId } = await response.json();
        localStorage.setItem('orderId', orderId);

        console.log(orderId);
        setLoading(false);
    }


    return {
        addToCart,
        loading,
    }
}