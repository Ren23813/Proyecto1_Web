import React from 'react'
import App from '../App.jsx'    

export default {
  title: 'Calculadora/App',    
  component: App,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <App {...args} />

export const Default = Template.bind({})
Default.args = {
}

export const Preloaded = Template.bind({})
Preloaded.decorators = [
  (storyFn) => {
    const Story = storyFn
    const [overrideInput] = React.useState('123')
    return (
      <div style={{ width: 240, height: 400 }}>
        <Story args={{ initialInput: overrideInput }} />
      </div>
    )
  },
]
