import React from 'react'
import { useHistory } from 'react-router-dom'
import { MenuItem, Spacer } from '../../atoms'
import './header.scss'

const Header = () => {
    const history = useHistory()
    return (
        <div className="main-header">
            <div className="left">
                <span className="my-logo">HiKids</span>
            </div>
            <div className="right">
                <MenuItem label="About" />
                <Spacer width={30} />
                <MenuItem label="Contact" />
                <Spacer width={30} />
                <MenuItem label="Logout" onClick={()=> history.push('/login')} />
            </div>
        </div>
    )
}

export default Header
