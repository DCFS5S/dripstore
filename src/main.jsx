import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CreateAccount } from './pages/CreateAccount/CreateAccount'
import { MyAccount } from './pages/MyAccount/MyAccount'
import { MyProfile } from './pages/MyAccount/MyProfile/MyProfile'
import { MyOrders } from './pages/MyAccount/MyOrders/MyOrders'
import { MyInfos } from './pages/MyAccount/MyInfos/MyInfos'
import { Pgto } from './pages/MyAccount/Pgto/Pgto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/carrinho',
    element: <h1>corrigir</h1>,
  },
  {
    path: '/produto/:id',
    element: <h1>corrigir</h1>
  },
  {
    path: '/criar-conta',
    element: <CreateAccount />
  },
  {
    path: '/login',
    element: <h1>corrigir</h1>
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
        element: <Pgto />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
