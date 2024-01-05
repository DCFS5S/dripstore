import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CartCheckout } from './components/CartCheckout/CartCheckout'
import { ProductDetails } from './pages/ProductDetails/ProductDetails'
import { CreateAccount } from './pages/CreateAccount/CreateAccount'
import { MyRequests } from './pages/MyRequests/MyRequests'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/carrinho',
    element: <CartCheckout />,
  },
  {
    path: '/produto/:id',
    element: <ProductDetails />
  },
  {
    path: '/criarconta',
    element: <CreateAccount />
  },
  {
    path: '/meuspedidos',
    element: <MyRequests />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
