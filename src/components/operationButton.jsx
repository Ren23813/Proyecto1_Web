import './operationButton.css'
const OperationButton = ({nombre, onButtonClick}) =>{
    return(
        <>
        <button className="operationButton" onClick={onButtonClick}>{nombre}</button>
        </>
    )
}

export default OperationButton