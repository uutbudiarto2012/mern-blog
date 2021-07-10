import React from 'react'
import './detail-blog.scss'
import { BGRegister } from '../../assets'
import { Button, Spacer } from '../../components'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className="detail-blog-wrapper">
            <img src={BGRegister} alt="" className="image-blog" />
            <p className="title">JUDUL BLOG</p>
            <p className="autor">NAMA PEnulis</p>
            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit illum quas necessitatibus in dolor id cumque dicta! Neque expedita sit saepe corrupti dicta perspiciatis temporibus nemo, quisquam, aliquam corporis necessitatibus, enim impedit inventore. Possimus, fugiat soluta. Fugiat vitae necessitatibus quae? Tempora est libero excepturi animi repellat, esse, itaque harum modi doloribus asperiores ipsum corporis neque illo eos obcaecati, veniam dignissimos voluptates at optio eum quae ipsam. Magnam, animi possimus? Vero quidem nobis vitae minima omnis iste iusto eius voluptatum at recusandae non molestiae dolorum, labore reprehenderit doloremque, in ea! Unde vero corporis suscipit ipsa explicabo maxime dolor aperiam illum molestias qui commodi, ipsam iusto. Illum laudantium autem, vel dolorem tempora labore quis assumenda similique a quisquam quo voluptatum veritatis nesciunt fuga harum veniam maiores ipsam at accusantium quod atque. Beatae ab eaque voluptates iure sed tempore provident reiciendis quas ducimus. Corporis mollitia doloribus officiis consectetur quam veniam nobis unde et odit eum alias nesciunt amet optio, nulla dolorem laborum commodi totam sit. Odio soluta reprehenderit vitae eligendi eveniet aspernatur sequi earum eum beatae! Enim sunt impedit ab hic similique, quaerat cupiditate, perferendis tempore laudantium aliquid adipisci laboriosam asperiores? Ducimus placeat quos magni molestiae eligendi unde dicta vero suscipit dolorum.
                </p>
            </div>
            <Spacer height={20} />
            <div className="btnBackToHome">
                <Button type="btn primary" label="Back to home" onClick={()=>history.push('/')} />
            </div>
            <Spacer height={20} />
        </div>
    )
}

export default DetailBlog
