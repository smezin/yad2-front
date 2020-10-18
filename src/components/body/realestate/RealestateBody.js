import React from 'react'
import TopInfo from '../common/TopInfo'
import TopAd from '../common/TopAd'
import SideAd from '../common/SideAd'
import RealestateContent from './RealestateContent'

const RealestateBody = (props) => {
    const { category } = props
    return (
        <div className="realestate-body">
            <SideAd adSide="right"/>
            <div className="realestate-body__content-area">
                <TopInfo />
                <TopAd />
                <RealestateContent category={category} />
            </div>  
            <SideAd adSide="left"/>
        </div>
    )
}

export default RealestateBody