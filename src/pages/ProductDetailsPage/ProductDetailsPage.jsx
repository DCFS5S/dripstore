import { useParams } from 'react-router-dom'

export const ProductDetailsPage = () => {
    const { productName } = useParams()

    return (
        <>
        { productName }
        </>
    )
}