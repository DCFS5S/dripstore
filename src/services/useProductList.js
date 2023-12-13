import { useEffect, useState } from "react"
import { API_URL } from "../constants"

export const useProductList = () => {
    const [ products, setProducts ] = useState([])
    const [ productsError, setProductsError ] = useState(null)
    const [ productsLoading, setProductsLoading ] = useState(true)
    
    const loadProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/products`)
        const items = await response.json()
        setProducts(items)
      } catch (error) {
        setProductsError(error)
      }
  
      setProductsLoading(false)
    }
  
    useEffect(() => {
      loadProducts()
    }, [])
    
    return {
        products, productsError, productsLoading
    }
}