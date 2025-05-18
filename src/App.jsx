import { useState } from 'react'
import {useReducer} from 'react'
import './App.css'



// function reducer(state, {tipo, input}) {
//  switch(tipo){
//     case 'escribir':
//       return {...state, inputActual: `${inputActual||""}${input.digito}`}

//  }
// }


function App() {
  const [input, setInput] = useState('')

  const concatenar = (valor) => {
    if (input.length < 9) {
    setInput(input + valor);
    }
  }
  //const verifyInput = () => {negativo; mayor a 999999999}

  //const [{inputActual, operacion}, dispatch] = useReducer(reducer, {})
  return (
  <div className="container"> 
    <div className="calculator"> 
      <div className="num-output">{input}</div>
      <div className="num-input">
        <button>C</button>
        <button>S</button>
        <button>%</button>
        <button>÷</button>
        <button onClick = {()=>concatenar('7')}>7</button>
        <button onClick = {()=>concatenar('8')}>8 </button>
        <button onClick = {()=>concatenar('9')}>9</button>
        <button onClick = {()=>{}}>*</button>
        <button onClick = {()=>concatenar('4')}>4</button>
        <button onClick = {()=>concatenar('5')}>5</button>
        <button onClick = {()=>concatenar('6')}>6</button>
        <button>-</button>
        <button onClick = {()=>concatenar('1')}>1</button>
        <button onClick = {()=>concatenar('2')}>2</button>
        <button onClick = {()=>concatenar('3')}>3</button>
        <button>+</button>
        <button className="Bcero" onClick = {()=>concatenar('0')}>0</button>
        <button>.</button>
        <button>=</button>
      </div> 
    </div>
  
  
  </div> //container
  )
}

export default App
