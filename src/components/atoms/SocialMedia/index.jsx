import React from 'react'

const SocialMedia = ({img,...rest}) => {
    return (
        <div {...rest}>
            <img className="iconSocial" src={img} alt="" />
        </div>
    )
}

export default SocialMedia
