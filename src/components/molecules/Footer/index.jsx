import React from 'react'
import './footer.scss'
import { ICFACEBOOK, ICGITHUB, ICINSTAGRAM } from '../../../assets'
import { SocialMedia } from '../../atoms'
const Footer = () => {
    return (
        <div className="footerWrapper">
            <div className="socialWrapper">
                <SocialMedia img={ICFACEBOOK} />
                <SocialMedia img={ICINSTAGRAM} />
                <SocialMedia img={ICGITHUB} />
            </div>
            <div className="copyRight">HiKids @2021</div>
        </div>
    )
}

export default Footer
