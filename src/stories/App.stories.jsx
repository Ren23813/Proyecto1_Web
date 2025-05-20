import React from 'react'
import App from '../App.jsx'    

// 1) Metadatos de la historia
export default {
  title: 'Calculadora/App',     // Carpeta 'Calculadora' y nombre 'App'
  component: App,
  parameters: {
    // Opciones de diseño, control de tamaño, backgrounds, etc.
    layout: 'centered',
  },
}

// 2) Plantilla reutilizable
const Template = (args) => <App {...args} />

// 3) Historias (`stories`) basadas en la plantilla
export const Default = Template.bind({})
Default.args = {
}

export const Preloaded = Template.bind({})
Preloaded.decorators = [
  (storyFn) => {
    // Decorator para simular que ya hay dígitos en pantalla
    const Story = storyFn
    const [overrideInput] = React.useState('123')
    return (
      <div style={{ width: 240, height: 400 }}>
        {/* Forzamos el estado inicial */}
        <Story args={{ initialInput: overrideInput }} />
      </div>
    )
  },
]
