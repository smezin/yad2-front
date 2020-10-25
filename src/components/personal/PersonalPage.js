import React from 'react'
import ItemContextProvider from 'context/ItemContext'
import SideAd from 'components/body/common/SideAd'
import PersonalContent from './PersonalContent'

const PersonalPage = () => {
    return (
        <div className="personal-page">
            <SideAd adSide="right" />
            <ItemContextProvider>
              <PersonalContent />
            </ItemContextProvider>
            <SideAd adSide="left" />
        </div>  
    )
}

export default PersonalPage