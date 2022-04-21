import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
       <div className='logo'>
           coffeeroaster
        </div>

            <ul className='nav-links'>
                <li> <Link to='/'>  Home </Link>  </li>
                <li> <Link to='/about'>  About Us </Link>  </li>
                <li> <Link to='/createplan'>  Create Your Plan </Link>  </li>
            </ul>
      
    </div>
  )
}

export default Navbar