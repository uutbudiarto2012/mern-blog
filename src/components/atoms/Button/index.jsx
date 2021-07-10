import React from 'react'
import './button.scss'

const Button = ({label,type,...rest}) => {
    return (
        <div className={type} {...rest}>
            <span>{label}</span>
        </div>
    )
}

export default Button