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
import { MyAccount } from './pages/MyAccount/MyAccount'
import { MyProfile } from './pages/MyAccount/MyProfile/MyProfile'
import { MyOrders } from './pages/MyAccount/MyOrders/MyOrders'
import { MyInfos } from './pages/MyAccount/MyInfos/MyInfos'
import { PaymentMethods } from './pages/MyAccount/PaymentMethods/PaymentMethods'
import { PageCartao1 } from './pages/MyAccount/PaymentMethods/PageCartao1/PageCartao1'
import { LoginPage } from './components/LoginPage/LoginPage'

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
        element: <PaymentMethods />,
        children: [
          {
            path: 'page-cartao1',
            element: <PageCartao1 />
          },
        ]
      },
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
