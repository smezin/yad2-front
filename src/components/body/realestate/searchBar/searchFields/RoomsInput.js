import React, { useState, useEffect } from 'react'
import onClickOutside from 'react-onclickoutside'
import fetchFromResource from 'utility/fetchFromResource'
import { upArrow, downArrow} from 'resources/specialChars'

function RoomsInput (props)  
{
    const localPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'localPlaceHolder')
    const from = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'fromLocalName')
    const upTo = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'upToLocalName')
    const [isOpen, setIsOpen] = useState(false)
    const toggleMainDropdown = () => setIsOpen(!isOpen)
    const { parentRect } = props
    const [menuWidth, setMenuWidth] = useState(parentRect.right) 
    const setMenuLocation = () => ( {left: parentRect.left - (menuWidth - parentRect.width)/2} )
    
    useEffect ( () => {
        const menuRect = document.getElementById('rooms__sub-menu')
        menuRect ? setMenuWidth(menuRect.getBoundingClientRect().width) : setMenuWidth(0)        
    },[isOpen])

    RoomsInput.handleClickOutside = () => setIsOpen(false)
    return (
        <div className="rooms__input">
            <div className="rooms-bar" onClick={toggleMainDropdown}>
                {localPlaceHolder}{isOpen ? upArrow : downArrow}
            </div>
            {
                isOpen && 
                <div className="rooms__sub-menu" id="rooms__sub-menu" style={setMenuLocation()}>
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
const clickOutsideConfig = {
    handleClickOutside: () => RoomsInput.handleClickOutside
  }
   
export default onClickOutside(RoomsInput, clickOutsideConfig)
