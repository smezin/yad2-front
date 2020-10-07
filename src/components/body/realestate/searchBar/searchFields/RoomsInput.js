import React, { useState, useEffect, useContext } from 'react'
import onClickOutside from 'react-onclickoutside'
import RoomsNumberPicker from '../../../common/NumberPicker'
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext } from 'context/FiltersContext'
import { upArrow, downArrow} from 'resources/specialChars'

function RoomsInput (props)  
{
    const { filters } = useContext(FiltersContext)
    const localPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'localPlaceHolder')
    const fromPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'fromLocalName')
    const upToPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'upToLocalName')
    const [mainInput, setMainInput] = useState(localPlaceHolder)
    const [from, setFrom] = useState(fromPlaceHolder)
    const [upTo, setUpTo] = useState(upToPlaceHolder)
    const [isMainOpen, setIsMainOpen] = useState(false)
    const [isFromOpen, setIsFromOpen] = useState(false)
    const [isUpToOpen, setIsUpToOpen] = useState(false)
    const [hasData, setHasData] = useState(false)
    const toggleMainDropdown = () => setIsMainOpen(!isMainOpen)
    
    const toggleFromDropdown = (() => {
        setIsFromOpen(!isFromOpen)
        setIsUpToOpen(false)
    })
    const toggleUpToDropdown = (() => {
        setIsUpToOpen(!isUpToOpen)
        setIsFromOpen(false)
    })
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
    //updating dispalys on main input bar and rooms number sub selectors
    useEffect ( () => {
        if (typeof(from) === 'number' && typeof(upTo) === 'string') {
            setMainInput(fromPlaceHolder + ' ' + from)
            setHasData(true)
        } else if (typeof(from) === 'string' && typeof(upTo) === 'number') {
            setMainInput(upToPlaceHolder + ' ' + upTo)
            setHasData(true)
        } else if (typeof(from) === 'number' && typeof(upTo) === 'number') {
            setMainInput(from + ' - ' + upTo)
            setHasData(true)
        } else {
            setMainInput(localPlaceHolder)
            setHasData(false)
        }
    },[from, upTo, fromPlaceHolder, upToPlaceHolder, localPlaceHolder])

    useEffect ( () => {
        filters.search.minRooms ? setFrom(filters.search.minRooms) : setFrom(fromPlaceHolder)
    },[filters.search.minRooms, fromPlaceHolder])
    useEffect ( () => {
        filters.search.maxRooms ? setUpTo(filters.search.maxRooms) : setUpTo(upToPlaceHolder)
    },[filters.search.maxRooms, upToPlaceHolder])

    RoomsInput.handleClickOutside = () => {
        setIsMainOpen(false)
        setIsFromOpen(false)
        setIsUpToOpen(false)
    }
    return (
        <div className="rooms__input">
            <div className={`rooms-bar ${hasData?'has-data':''}`} onClick={toggleMainDropdown}>
                {mainInput}{isMainOpen ? upArrow : downArrow}
            </div>
            {
                isMainOpen && 
                <div className="rooms__sub-menu" id="rooms__sub-menu" style={setMenuLocation()}>
                    <div className="rooms__sub-menu__from" onClick={toggleFromDropdown}>
                        {from} {upArrow} 
                        {   isFromOpen &&
                            <RoomsNumberPicker set="min" min={1} max={12} step={0.5} downOffset={menuHeight}/>
                        }
                    </div>
                    <div className="rooms__sub-menu__upto" onClick={toggleUpToDropdown}>
                        {upTo} {upArrow}
                        {   isUpToOpen &&
                            <RoomsNumberPicker set="max" min={1} max={12} step={0.5} downOffset={menuHeight}/>
                        }
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
