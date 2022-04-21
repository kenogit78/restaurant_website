import React from 'react'
import { Link } from 'react-router-dom'
import './prudence.css'


function Home() {
  return (
    <div className='home'>
      <h1> This is the Hompepage </h1>
        
      <Link to='/about'> <button>  About Page   </button> </Link>
        
    </div>
  )
}

export default Home