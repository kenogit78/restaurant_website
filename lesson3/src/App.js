
import React, { useEffect } from 'react';
import styled from 'styled-components'
import './App.css';
import NumberCounter from './components/NumberCounter';


const JSXStyled = styled.div`
padding: 2em;
text-align: center
`

const JSXh1 = styled.h1`
color: green
`

function App() {

useEffect(() => {
  alert('Welcome to Side hustle internship Cohort 5.0')
  
}, [])


  return (

    <JSXStyled>

      <NumberCounter />
      
       </JSXStyled>
  );
}

export default App;
