import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CartCheckList } from './components/CartCheckList/CartCheckList'
import { ProductDetails } from './pages/ProductDetails/ProductDetails'
import { CreateAccount } from './pages/CreateAccount/CreateAccount'
import { MyAccount } from './pages/MyAccount/MyAccount'
import { MyProfile } from './components/MyProfile/MyProfile'
import { MyOrders } from './components/MyOrders/MyOrders'
import { MyInfos } from './components/MyInfos/MyInfos'

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
    path: '/produto/:id',
    element: <ProductDetails />
  },
  {
    path: '/criar-conta',
    element: <CreateAccount />
  },
  {
    path: '/meus-pedidos',
    element: <MyAccount />,
    children: [
      {
        path: 'meu-perfil',
        element: <MyProfile />
      },
      {
        path: 'meus-pedidos',
        element: <MyOrders />
      },
      {
        path: 'minhas-informacoes',
        element: <MyInfos />
      },
      {
        path: 'metodos-de-pagamento',
        element: <h1>Métodos de Pagamento</h1>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
