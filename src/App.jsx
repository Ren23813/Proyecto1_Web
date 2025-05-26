import { useState } from 'react'
//import {useReducer} from 'react'
import './App.css'



function App() {
  const [input, setInput] = useState('')
  const [prev, setPrev] = useState(null)
  const [action, setAction] = useState(null)
  const [prevAction, setPrevAction] = useState(false)
  
  const mostrarEnPantalla = (valor) => {
    if (valor > 999999999) {
      setInput('ERROR')
    } else {
      setInput(String(valor))
    }
  }

  const concatenar = (valor) => {
    if (input === 'ERROR') return

    if (prevAction||input === '') {setInput(valor)}
    else if (input.length < 9) {
    //if (action === '') {setPrev(input)}
    setInput(input + valor)
    }
    setPrevAction(false)
  }

  const clear = () => {
    setInput('')
    setPrev(null)
    setAction(null)
    setPrevAction(false)
  }

  const suma = (valor1, valor2) => {
    return parseFloat(valor1) + parseFloat(valor2)
  }

  const resta = (valor1, valor2) => {
    return parseFloat(valor1) - parseFloat(valor2)
  }

  const multiplicacion = (valor1, valor2) => {
    return parseFloat(valor1) * parseFloat(valor2)
  }

  const mostrarResultado = () => {
    if (prev === null || !action) return parseFloat(input)
      const current = parseFloat(input)
      let resultado = prev
    //let resultado = 0
    switch (action) {
      case 'suma':
          resultado = suma(prev,current)
          if (resultado > 999999999) {setInput('Error')}
        break
      case 'resta':
          resultado = resta(prev,current)
          
        break
      case 'multiplicacion':
          resultado = multiplicacion(prev,current)
          if (resultado > 999999999) {setInput('Error')}
        break

      default:
        break
    } 
   return resultado

  }

  const operar = (accion) =>{
    const value = mostrarResultado()
    const primeraOp = prev === null
    setPrev(value)
    setAction(accion)
    if (primeraOp) {setInput('')}
    else {
    mostrarEnPantalla(value)
    }
    setPrevAction(true)
  }

  const igual = () => {
    const value = mostrarResultado()
    mostrarEnPantalla(value)
    setPrev(null)
    setAction(null)
    setPrevAction(null)
  }

  //const verifyInput = () => {negativo; mayor a 999999999}

  //const [{inputActual, operacion}, dispatch] = useReducer(reducer, {})
  return (
  <div className="container"> 
    <div className="calculator"> 
      <div className="num-output">{input}</div>
      <div className="num-input">
        <button onClick = {()=>clear()}>C</button>
        <button>S</button>
        <button>%</button>
        <button>÷</button>
        <button onClick = {()=>concatenar('7')}>7</button>
        <button onClick = {()=>concatenar('8')}>8 </button>
        <button onClick = {()=>concatenar('9')}>9</button>
        <button onClick = {()=>{{operar('multiplicacion')}}}>*</button>
        <button onClick = {()=>concatenar('4')}>4</button>
        <button onClick = {()=>concatenar('5')}>5</button>
        <button onClick = {()=>concatenar('6')}>6</button>
        <button onClick={()=>{operar('resta')}}>-</button>
        <button onClick = {()=>concatenar('1')}>1</button>
        <button onClick = {()=>concatenar('2')}>2</button>
        <button onClick = {()=>concatenar('3')}>3</button>
        <button onClick= {()=>{operar('suma')}}>+</button>
        <button className="Bcero" onClick = {()=>concatenar('0')}>0</button>
        <button>.</button>
        <button onClick= {()=>{igual()}}>=</button>
      </div> 
    </div>
  
  
  </div> //container
  )
}

export default App
