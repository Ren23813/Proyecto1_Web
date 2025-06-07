import OperationButton from '../components/operationButton'   

export default {
  title: 'Components/OperationButton',
  component: OperationButton,
}   

const action = (event) => alert(`Operation ${event.target.innerText} clicked!`)   

const Template = (args) => <OperationButton {...args} />   

export const AdditionButton = Template.bind({})   
AdditionButton.args = {
  nombre: '+',
  onButtonClick: action,
}   



export const SubtractionButton = Template.bind({})   
SubtractionButton.args = {
  nombre: '-',
  onButtonClick: action,
}   


export const MultiplyButton = Template.bind({})   
MultiplyButton.args = {
  nombre: '*',
  onButtonClick: action,
}   
 

export const DivisionButton = Template.bind({})   
DivisionButton.args = {
  nombre: '÷',
  onButtonClick: action,
}   
