import React from 'react'
import { BGRegister } from '../../../assets'
import './upload.scss'

const Upload = () => {
    return (
        <div className="upload">
            <div className="previewWraper">
            <img className="preview" src={BGRegister} alt="preview" />
            </div>
            <div className="uploadWrapper">
                <input type="file" />
            </div>
        </div>
    )
}

export default Upload
