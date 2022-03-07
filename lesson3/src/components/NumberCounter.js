import React, { useState } from 'react'
import styled from 'styled-components'

const NumberCounter = () => {
    const [counter, setCounter] = useState(0)

    const Button = styled.button`
    margin: 0.5em
    `


    const IncrementCounter = () => {
        setCounter(counter+5)
    }

    const DecrementCounter = () => {
        setCounter(counter-10)
    }

  return (
    <div>
        <h1> { counter } </h1>

        <Button onClick={DecrementCounter}> Subtract </Button>

        <Button onClick={IncrementCounter}> Add </Button>
        
        
    </div>
  )
}

export default NumberCounter