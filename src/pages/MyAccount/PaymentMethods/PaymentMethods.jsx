import { Outlet } from 'react-router-dom'
import './PaymentMethods.css'

export const PaymentMethods = () => {

  return(
    <>
      <div className='payment-methods-content'>
        <Outlet />
      </div>
    </>
  )
}
