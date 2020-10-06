import React, { useState, useEffect } from 'react'
import onClickOutside from 'react-onclickoutside'
import NumberPicker from './NumberPicker'
import fetchFromResource from 'utility/fetchFromResource'
import { upArrow, downArrow} from 'resources/specialChars'

function RoomsInput (props)  
{
    const localPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'localPlaceHolder')
    const from = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'fromLocalName')
    const upTo = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'upToLocalName')
    const [isMainOpen, setIsMainOpen] = useState(false)
    const [isFromOpen, setIsFromOpen] = useState(false)
    const [isUpToOpen, setIsUpToOpen] = useState(false)
    const toggleMainDropdown = () => setIsMainOpen(!isMainOpen)
    const toggleFromDropdown = () => setIsFromOpen(!isFromOpen)
    const toggleUpToDropdown = () => setIsUpToOpen(!isUpToOpen)
    const { parentRect } = props
    const [menuWidth, setMenuWidth] = useState(parentRect !== 0 ? parentRect.right : 0) 
    const [menuHeight, setMenuHeight] = useState(0)
    
    const setMenuLocation = () => { 
        const menuVisbilityStatus = (menuWidth === 0) ? "hidden" : "visible"
        return {
            left: parentRect.left - (menuWidth - parentRect.width)/2,
            visibility: menuVisbilityStatus
        } 
    }
    
    useEffect ( () => {
        const menuRect = document.getElementById('rooms__sub-menu')
        if (menuRect) {
            setMenuWidth(menuRect.getBoundingClientRect().width) 
            setMenuHeight(menuRect.getBoundingClientRect().height)    
        } else {
            setMenuWidth(0) 
            setMenuHeight(0)
        }
           
    },[isMainOpen])

    RoomsInput.handleClickOutside = () => {
        setIsMainOpen(false)
        setIsFromOpen(false)
        setIsUpToOpen(false)
    }
    return (
        <div className="rooms__input">
            <div className="rooms-bar" onClick={toggleMainDropdown}>
                {localPlaceHolder}{isMainOpen ? upArrow : downArrow}
            </div>
            {
                isMainOpen && 
                <div className="rooms__sub-menu" id="rooms__sub-menu" style={setMenuLocation()}>
                    <div className="rooms__sub-menu__from" onClick={toggleFromDropdown}>
                        {from} {upArrow} <NumberPicker min={1} max={12} step={0.5} downOffset={menuHeight}/>
                    </div>
                    <div className="rooms__sub-menu__upto" onClick={toggleUpToDropdown}>
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
