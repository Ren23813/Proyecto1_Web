import { useState } from 'react'
import './App.css'
import NumberButton from './components/numberButton'
import OperationButton from './components/operationButton'
import DisplayArea from './components/displayArea'



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

  if (valor === '.') {
    if (prevAction || input === '') {
      setInput('0.')
    } 
    else if (!input.includes('.') && input.length < 9) {
      setInput(input + '.')
    }
  } 
  else {
    if (prevAction || input === '') {
      setInput(valor)
    } else if (input.length < 9) {
      setInput(input + valor)
    }
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

  const division = (valor1,valor2) => {
    if (valor2 === '0'){return "N/A"}
    return parseFloat(valor1) / parseFloat(valor2)
  }


const mostrarResultado = () => {
  if (prev === null || !action) return parseFloat(input)

  const current = parseFloat(input)
  let resultado = prev

  switch (action) {
    case 'suma':
      resultado = suma(prev, current)
      break
    case 'resta':
      resultado = resta(prev, current)
      break
    case 'multiplicacion':
      resultado = multiplicacion(prev, current)
      break
    case "division":
      resultado = division(prev,current)
      if (resultado === 'N/A') {resultado = prev}
      break
    case "modulo":
      resultado = prev % current
      break
    default:
      return parseFloat(input)
  }

  if(resultado >999999999){
    return "ERROR"
  }
  let resultadoStr = resultado.toString()
  if (resultadoStr.length > 9) {
    resultadoStr = resultadoStr.slice(0, 9)
  }
  const resultadoFinal = parseFloat(resultadoStr)
  return resultadoFinal
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

  const cambiarSigno = () => {
  if (input === 'ERROR') return
  if (input.startsWith('-')) {
    setInput(input.slice(1))
  } 
  else {
      if (input.length >= 9) {
        const nuevoInput = input.slice(0, 8)
        setInput('-' + nuevoInput)
      }
      else {
        setInput('-' + input)
      }
    }
}


  return (
  <div className="container"> 
    <div className="calculator"> 
      {/* <div className="num-output">{input}</div> */}
      <DisplayArea valor={input}/>
      <div className="num-input">
        <OperationButton onButtonClick={()=>clear()} nombre={'C'}/>
        <OperationButton onButtonClick={()=>cambiarSigno()} nombre={'Sign'}/>
        <OperationButton onButtonClick={()=>operar('modulo')} nombre={'mod'}/>
        <OperationButton onButtonClick={()=>operar('division')} nombre={'÷'}/>
        <NumberButton onButtonClick={()=>concatenar('7')} nombre={'7'}/>
        <NumberButton onButtonClick={()=>concatenar('8')} nombre={'8'}/>
        <NumberButton onButtonClick={()=>concatenar('9')} nombre={'9'}/>
        <OperationButton onButtonClick={()=>operar('multiplicacion')} nombre={'*'}/>
        <NumberButton onButtonClick={()=>concatenar('4')} nombre={'4'}/>
        <NumberButton onButtonClick={()=>concatenar('5')} nombre={'5'}/>
        <NumberButton onButtonClick={()=>concatenar('6')} nombre={'6'}/>
        <OperationButton onButtonClick={()=>operar('resta')} nombre={'-'}/>
        <NumberButton onButtonClick={()=>concatenar('1')} nombre={'1'}/>
        <NumberButton onButtonClick={()=>concatenar('2')} nombre={'2'}/>
        <NumberButton onButtonClick={()=>concatenar('3')} nombre={'3'}/>
        <OperationButton onButtonClick={()=>operar('suma')} nombre={'+'}/>
        <NumberButton onButtonClick={()=>concatenar('0')} nombre={'0'}/>
        <NumberButton onButtonClick={()=>concatenar('.')} nombre={'.'}/>
        <OperationButton onButtonClick={()=>igual()} nombre={'='}/>
      </div> 
    </div>
  
  </div> 
  )
}

export default App
