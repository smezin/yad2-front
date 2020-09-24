import React from 'react'
import icons from '../../icons'

const TopInfo = () => {


    return (
        <div className="top-info">
            <div className="top-info__right">
                ראשי - נכסים למכירה   
            </div>
            <div className="top-info__accessibility">
                נגישות <img src={icons.accessibility} alt=""/>
            </div>
        </div>
    )
}

export default TopInfo