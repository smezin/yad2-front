import React from 'react'
import ItemContextProvider from 'context/ItemContext'
import SideAd from 'components/body/common/SideAd'
import PersonalMenu from './PersonalMenu'

const PersonalPage = () => {
    return (
        <div className="personal-page">
            <SideAd adSide="right" />
            <ItemContextProvider>
              <PersonalMenu />
            </ItemContextProvider>
            <SideAd adSide="left" />
        </div>
        
    )
}

export default PersonalPage