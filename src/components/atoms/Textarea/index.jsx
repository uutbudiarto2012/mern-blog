import React from 'react'
import './textarea.scss'

const Textarea = ({isActive,...rest}) => {
    return (
        <div className="textarea-wrapper">
            <textarea className="textarea" {...rest} />
        </div>
    )
}

export default Textarea
