import React from 'react'
import './home.scss'
import { BlogCard, Button, Spacer } from '../../components'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()
    return (
        <div>
            <div className="btn-create">
                <Button type="btn primary" label="Create New" onClick={()=>history.push('/create')} />
            </div>
            <Spacer height={20} />
            <div className="blog-wrapper">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <div className="pagination">
                <Button type="btn primary" label="PREV" />
                <Spacer width={30} />
                <Button type="btn primary" label="NEXT" />
            </div>
            <Spacer height={20} />
        </div>
    )
}

export default Home
