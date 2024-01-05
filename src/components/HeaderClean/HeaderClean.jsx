import { Link } from 'react-router-dom'
import './HeaderClean.css'

export const HeaderClean = () => {
  return(
    <>
      <div className='header-clean-container'>
        <Link to='/'>
          <img src="assets/img/logo.png" alt="" />
        </Link>
      </div>
    </>
  )
}
