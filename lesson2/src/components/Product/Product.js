import React from 'react'
import { Link } from 'react-router-dom'
import Box from '../Home/Box'

import './product.css'

const Product = ({foods}) => {

 

  return (
    <div>
        <h1>This is our Product Page</h1>

        <p> These are the list of available food.</p>

        <div className='cards'>
          {
            foods && foods.map((food) => 
              <div className='card-box'>
                  <Link to={`${food.foodname}/${food.price} `}>
                    <div className='card-images'>
                      <img src={food.image} alt="" />
                    </div>
                    
                    <p> {food.foodname} </p>
                    <p> {food.price} </p>
                
                  </Link>
                </div>
               

             )  
          }

        </div>
<Box foods= {foods} />
    </div>
  )
}

export default Product