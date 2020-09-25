import React from 'react'
import TopInfo from './TopInfo'
import TopAd from './TopAd'
import SideAd from './SideAd'

const RealestateBody = () => {
    return (
        <div className="realestate-body">
            <SideAd adSide="right"/>
            <div className="realestate-body__content-area">
                <TopInfo />
                <TopAd />
               
            </div>  
            
        </div>
    )
}

export default RealestateBody