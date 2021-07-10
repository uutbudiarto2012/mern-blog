import React from 'react'
import './create-blog.scss'
import { useHistory } from 'react-router-dom'

import { Button, Input, Spacer, Textarea, Upload } from '../../components'


const CreateBlog = () => {
    const history = useHistory()
    return (
        <div>
            <p className="page-title">Create New Blog</p>
            <Input label="Title" />
            <Upload />
            <Textarea rows={10} placeholder="Type here..." />
            <Spacer height={20} />
            <div className="btnPost">
                <Button onClick={()=> history.push('/')} type="btn" label="Cancel" />
                <Spacer width={30} />
                <Button onClick={()=> history.push('/')} type="btn primary" label="Submit" />
            </div>
            <Spacer height={20} />
        </div>
    )
}

export default CreateBlog
