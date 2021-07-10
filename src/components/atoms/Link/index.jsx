import React from 'react'
import './link.scss'

const Link = ({label,onClick}) => {
    return (
        <div className="linkWrapper">
            <span className="link" onClick={onClick}>{label}</span>
        </div>
    )
}

export default Link
