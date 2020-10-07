import React, { useState, useEffect, useContext } from 'react'
import onClickOutside from 'react-onclickoutside'
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext } from 'context/FiltersContext'
import { upArrow, downArrow} from 'resources/specialChars'
import FromToInput from 'components/body/common/FromToInput'

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
    const [hasData, setHasData] = useState(false)
    const toggleMainDropdown = () => setIsMainOpen(!isMainOpen)
    
    const { parentRect } = props
  
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
    }
    const subMenuSpecs = {
        min: 1,
        max: 12,
        step: 0.5,
        from,
        upTo,
        parentRect,
    }
    return (
        <div className="rooms__input">
            <div className={`rooms-bar ${hasData?'has-data':''}`} onClick={toggleMainDropdown}>
                {mainInput}{isMainOpen ? upArrow : downArrow}
            </div>
            {
                isMainOpen &&                
                <FromToInput  menuSpecs={subMenuSpecs}/>
            }
        </div>
        
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => RoomsInput.handleClickOutside
}   
export default onClickOutside(RoomsInput, clickOutsideConfig)

