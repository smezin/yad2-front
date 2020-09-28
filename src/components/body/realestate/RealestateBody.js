import React from 'react'
import TopInfo from '../common/TopInfo'
import TopAd from '../common/TopAd'
import SideAd from '../common/SideAd'
import SearchBar from './searchBar/SearchBar'

const RealestateBody = () => {
    return (
        <div className="realestate-body">
            <SideAd adSide="right"/>
            <div className="realestate-body__content-area">
                <TopInfo />
                <TopAd />
                <SearchBar />
            </div>  
            <SideAd adSide="left"/>
        </div>
    )
}

export default RealestateBody