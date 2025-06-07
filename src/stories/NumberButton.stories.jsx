import NumberButton from "../components/numberButton"

export default {
  title: 'Components/NumberButton',
  component: NumberButton,
}  

const action = (event) => alert(`Button ${event.target.innerText} clicked!`)  

const Template = (args) => <NumberButton {...args} />  

export const DefaultButton = Template.bind({})  
DefaultButton.args = {
  nombre: '5', 
  onButtonClick: action,
}  

export const ZeroButton = Template.bind({})  
ZeroButton.args = {
  nombre: '0', 
  onButtonClick: action,
}  

export const AnotherButton = Template.bind({})  
AnotherButton.args = {
  nombre: '9',  
  onButtonClick: action,
}  
