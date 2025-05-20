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

    await user.click(screen.getByRole('button', { name: '7' }))
    await user.click(screen.getByRole('button', { name: '8' }))
    await user.click(screen.getByRole('button', { name: '9' }))

    expect(screen.getByText('789')).toBeInTheDocument()
  })

  it('no debería permitir más de 9 dígitos', async () => {
    render(<App />)
    const user = userEvent.setup()
    const boton1 = screen.getByRole('button', { name: '1' })

    for (let i = 0; i < 12; i++) {
      await user.click(boton1)
    }

    // Ahora el output único debe ser exactamente 9 dígitos
    expect(screen.getByText((content) => content === '111111111')).toBeInTheDocument()
  })
})
