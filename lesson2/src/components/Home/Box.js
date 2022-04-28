import React from 'react'
import './prudence.css'

const Box = ({foods}) => {
  return (
    <div className='box'>
       <h1> {foods[3].foodname }</h1>
       <h1> {foods[3].price }</h1>
    </div>
  )
}

export default Box