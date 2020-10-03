import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import RoomsInput from './RoomsInput'

const Rooms = () => {
    const localHeaderTitle = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'localName')
    return(
        <div className="rooms">
            <div className="rooms__header" dir="rtl">
                {localHeaderTitle}
            </div>
            <div className="rooms__input" dir="rtl">
                <RoomsInput />
            </div>
        </div>
    )
}

export default Rooms