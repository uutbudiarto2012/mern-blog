import React from 'react'
import { useHistory } from 'react-router-dom'
import { BGRegister } from '../../../assets'
import {  Link, Spacer } from '../../atoms'
import './blog-card.scss'

const BlogCard = () => {
    const history = useHistory()
    return (
        <div className="blog-card">
            <img className="blog-thumb" src={BGRegister} alt="blog" />
            <div className="body-blog">
                <p className="title-blog">Title Blog</p>
                <p className="author-blog">Autho - Date</p>
                <div className="content-blog">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse optio hic est perferendis! Nobis magnam, expedita quidem esse quisquam blanditiis. Libero ipsa delectus facere consequuntur repellat neque rem eum repudiandae saepe aliquid beatae blanditiis, laudantium cum commod.
                    </p>
                    <Spacer height={10} />
                    <Link type="btn" label="Detail" onClick={()=>history.push('/detail')} />
                    <Spacer height={5} />
                </div>
            </div>
        </div>
    )
}

export default BlogCard
