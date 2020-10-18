import React from 'react'
import PublishNewItem from './PublishNewItem'
import PersonalMenu from './PersonalMenu'

const PersonalContent = () => {

    return (
        <div className="personal-content">
            <PersonalMenu />
            <PublishNewItem />
        </div>
    )
}
export default PersonalContent