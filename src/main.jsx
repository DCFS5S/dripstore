import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CartCheckList } from './components/CartCheckList/CartCheckList'
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/carrinho',
    element: <CartCheckList
      name="Tênis Nike Revolution 6 Next Nature Masculino"
      color="Vermelho / Branco"
      size="42"
      price="219,00"
      oldPrice="219,00"
    />,
  },
  {
    path: '/product/:productName',
    element: <ProductDetailsPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
