// src/test/App.test.jsx
// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from '../App.jsx'

describe('App - Calculadora', () => {
  it('debería mostrar los números cuando se hace clic en los botones', async () => {
    render(<App />)
    const user = userEvent.setup()

    await user.click(screen.getByText('7'))
    await user.click(screen.getByText('8'))
    await user.click(screen.getByText('9'))

    expect(screen.getByText('789')).toBeInTheDocument()
  })

  it('no debería permitir más de 9 dígitos', async () => {
    render(<App />)
    const user = userEvent.setup()

    // Hacer click 12 veces en el botón con texto '1'
    const botonUno = screen.getByText('1')
    for (let i = 0; i < 12; i++) {
      await user.click(botonUno)
    }

    // Asegurar que el número mostrado es exactamente 9 dígitos
    expect(screen.getByText('111111111')).toBeInTheDocument()
  })

  it('debería sumar bien y mostrar el resultado', async () => {
    render(<App />)
    const user = userEvent.setup()

    await user.click(screen.getByText('7'))
    await user.click(screen.getByText('+'))
    await user.click(screen.getByText('7'))
    await user.click(screen.getByText('='))

    expect(screen.getByText('14')).toBeInTheDocument()
  })

  it('debería multiplicar bien y mostrar el resultado', async () => {
    render(<App />)
    const user = userEvent.setup()

    await user.click(screen.getByText('5'))
    await user.click(screen.getByText('*'))
    await user.click(screen.getByText('2'))
    await user.click(screen.getByText('*'))

    expect(screen.getByText('10')).toBeInTheDocument()
  })

it('debería restar bien y mostrar el resultado', async () => {
    render(<App />)
    const user = userEvent.setup()

    await user.click(screen.getByText('8'))
    await user.click(screen.getByText('3'))
    await user.click(screen.getByText('-'))
    await user.click(screen.getByText('4'))
    await user.click(screen.getByText('='))

    expect(screen.getByText('79')).toBeInTheDocument()
  })
})
