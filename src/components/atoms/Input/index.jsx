import React from 'react'
import './index.scss'

const Input = ({label,...rest}) => {
    return (
        <div className="inputWrapper">
            <span className="labelInput">{label}</span>
            <input className="textInput" type="text" {...rest} />
        </div>
    )
}

export default Input
