import React, { useState, useEffect, useContext } from 'react'
import onClickOutside from 'react-onclickoutside'
import fetchFromResource from 'utility/fetchFromResource'
import setFromToInputDisplay from 'utility/setFromToInputDisplay'
import { FiltersContext } from 'context/FiltersContext'
import { upArrow, downArrow} from 'resources/specialChars'
import RangeInputDiscrete from 'components/body/common/RangeInputDiscrete'
import { setMaxRooms, setMinRooms } from 'actions/filters' 

function RoomsInput (props)  
{
    const { filters } = useContext(FiltersContext)
    const localPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'localPlaceHolder')
    const fromPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'fromLocalName')
    const upToPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'upToLocalName')
    const numbersHeader = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'any')
    const [mainInput, setMainInput] = useState(localPlaceHolder)
    const [fromText, setFromText] = useState(fromPlaceHolder)
    const [upToText, setUpToText] = useState(upToPlaceHolder)
    const [isMainOpen, setIsMainOpen] = useState(false)
    const [hasData, setHasData] = useState(false)
    const toggleMainDropdown = () => setIsMainOpen(!isMainOpen)
    
    const { parentRect } = props
  
    useEffect ( () => {
        setMainInput(setFromToInputDisplay(fromText, upToText, localPlaceHolder, fromPlaceHolder, upToPlaceHolder))
        setHasData(mainInput === localPlaceHolder ? false : true)
    },[mainInput, fromText, upToText, fromPlaceHolder, upToPlaceHolder, localPlaceHolder])

    useEffect ( () => {
        filters.search.minRooms ? setFromText(filters.search.minRooms) : setFromText(fromPlaceHolder)
    },[filters.search.minRooms, fromPlaceHolder])
    useEffect ( () => {
        filters.search.maxRooms ? setUpToText(filters.search.maxRooms) : setUpToText(upToPlaceHolder)
    },[filters.search.maxRooms, upToPlaceHolder])

    RoomsInput.handleClickOutside = () => {
        setIsMainOpen(false)
    }
    const subMenuSpecs = {
        numbersHeader,
        min: 1,
        max: 12,
        step: 0.5,
        setMax: setMaxRooms,
        setMin: setMinRooms,
        minFilter: "minRooms",
        maxFilter: "maxRooms",
        from: fromText,
        upTo: upToText,
        parentRect,
    }
    return (
        <div className="rooms__input">
            <div className={`rooms-bar ${hasData?'has-data':''}`} onClick={toggleMainDropdown}>
                {mainInput}{isMainOpen ? upArrow : downArrow}
            </div>
            {
                isMainOpen &&                
                <RangeInputDiscrete  menuSpecs={subMenuSpecs} autoPosition={true} />
            }
        </div>
        
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => RoomsInput.handleClickOutside
}   
export default onClickOutside(RoomsInput, clickOutsideConfig)