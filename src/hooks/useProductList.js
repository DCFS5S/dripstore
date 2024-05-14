import { useState } from "react"

export const useProductList = () => {
    const [list, setList] = useState([]); 
    const [loading, setLoading] = useState(false); 

    const loadProducts = async () => {
        setLoading(true);
        const result = await fetch('http://localhost:3000/products');
        const { products } = await result.json();
        setList(products);
        setLoading(false);
    }

    return {
        loadProducts,
        list,
        loading,
    }
}