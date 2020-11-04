import React from 'react'
import { ads } from 'ads'

const TopAd = () => {
    console.log(ads.topAd.imgSrc)
    return (
        <div className="top-advertising">
            <img src={ads.topAd.imgSrc} alt="top-ad"/>
        </div>
    )
}

export default TopAd