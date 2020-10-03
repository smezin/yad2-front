import React from 'react'
import { ads } from 'ads'

const TopAd = () => {
    return (
        <div className="top-advertising">
            <img src={ads.topAd.imgSrc} alt="top-ad"/>
        </div>
    )
}

export default TopAd