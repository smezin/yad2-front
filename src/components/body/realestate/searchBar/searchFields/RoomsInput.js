import React, { useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { upArrow, downArrow} from 'resources/specialChars'

const RoomsInput = () => {
    const localPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'localPlaceHolder')
    const from = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'fromLocalName')
    const upTo = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'upToLocalName')
    const [isOpen, SetIsOpen] = useState(false)
    const toggle = () => SetIsOpen(!isOpen)
    return (
        <div className="rooms-container">
            <div className="rooms-bar" onClick={toggle}>
                {localPlaceHolder}{isOpen ? upArrow : downArrow}
            </div>
            {
                isOpen && 
                <div className="rooms__sub-menu">
                    <div className="rooms__sub-menu__from">
                        {from} {upArrow} 
                    </div>
                    <div className="rooms__sub-menu__upto">
                        {upTo} {upArrow} 
                    </div>

                </div>
            }
        </div>
        
    )
}

export default RoomsInput