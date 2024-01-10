import { useState } from 'react'
import './App.css'

function App() {

let [counter , setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1)
    if(counter  >= 20) {
      alert('Oops! no you can not add value more than 20')
      setCounter(counter = 20)
    }
  }

  const removeValue = () => {
    setCounter(counter - 1)
    if(counter < 1 ) {
      alert('Oops! no you can not value count less than 0')
      setCounter(counter  = 0)
    }
  }

  const backToZero = () => {
    if(counter == 0) {
      alert('Oops! already 0')
    }
    setCounter(counter = 0)
  }

  return (
    <>
      <h1>Chlo count Kare! </h1>  
      <h2>counter value is {counter}</h2>
      <button 
      onClick={addValue}
      >Add Value</button>
      <br /> 
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
      <br />
      <br />
      <button 
      onClick={backToZero}
      >Back to 0</button>      
    </>
  )
}

export default App
