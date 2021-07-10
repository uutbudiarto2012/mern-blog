import React from 'react'
import './menu-item.scss'

const MenuItem = ({label,onClick}) => {
    return (
        <div className="menuItem" onClick={onClick}>
            <span>{label}</span>
        </div>
    )
}

export default MenuItem
