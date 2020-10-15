import React from 'react'
import SideAd from '../body/common/SideAd'
import PersonalContent from './PersonalContent'

const PersonalPage = () => {
    return (
        <div className="personal-page">
            <SideAd adSide="right" />
            <PersonalContent />
            <SideAd adSide="left" />
        </div>
        
    )
}

export default PersonalPage