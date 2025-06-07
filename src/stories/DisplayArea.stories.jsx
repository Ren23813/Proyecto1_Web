import DisplayArea from "../components/displayArea"

export default {
  title: 'Components/DisplayArea',
  component: DisplayArea,
}

const Template = (args) => <DisplayArea {...args} />

export const Default = Template.bind({})
Default.args = {
  valor: '5',  
}

export const WithNumber = Template.bind({})
WithNumber.args = {
  valor: 1234,
}

export const Empty = Template.bind({})
Empty.args = {
  valor: '',
}
