const NumberButton = ({nombre, onButtonClick }) => {
    if (nombre==='0'){
        return(
            <>
                <button className="Bcero" onClick={onButtonClick}>{nombre}</button>
            </>
        )
    }
    else {
    return(
        <>
        <button onClick={onButtonClick}>{nombre}</button>
        </>
    )
    }
}

export default NumberButton