import React from 'react'
// import { Link } from 'react-router-dom'
import './prudence.css'


function Home() {

 let component = "Homepage"

const handleClick = () => {
  
}

  return (
    <div className='home'>
      <h1> This is the {component} </h1>

      <button onClick={handleClick }> Go to product  </button>
       
      {/* <Link to='/about'> <button>  About Page   </button> </Link> */}
        
    </div>
  )
}

export default Home