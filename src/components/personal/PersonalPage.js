import React from 'react'
import ItemContextProvider from 'context/ItemContext'
import SideAd from 'components/body/common/SideAd'
import PersonalContent from './PersonalContent'

const PersonalPage = (props) => {
    const tab = props?.location?.state?.tab 
    return (
        <div className="personal-page">
            <SideAd adSide="right" />
            <ItemContextProvider>
              <PersonalContent tab={tab}/>
            </ItemContextProvider>
            <SideAd adSide="left" />
        </div>  
    )
}
export default PersonalPage