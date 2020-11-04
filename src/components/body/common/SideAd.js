import React from 'react'
import { ads } from 'ads'

const SideAd = (props) => {
    const { adSide } = props
    return (
        <div className={`side-ad__${adSide}`}>
            <img src={ads.sideAd.imgSrc} alt="side-add" />
        </div>
    )
}

export default SideAd