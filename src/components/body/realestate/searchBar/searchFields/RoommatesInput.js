import React, { useState, useEffect, useContext } from 'react'
import onClickOutside from 'react-onclickoutside'
import fetchFromResource from 'utility/fetchFromResource'
import setFromToInputDisplay from 'utility/setFromToInputDisplay'
import { FiltersContext } from 'context/FiltersContext'
import { upArrow, downArrow} from 'resources/specialChars'
import FromToInput from 'components/body/common/FromToInput'
import { setMinRoommates, setMaxRoommates } from 'actions/filters'

function RoommatesInput (props)  
{
    const { filters } = useContext(FiltersContext)
    const localPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'roommates', 'localPlaceHolder')
    const fromPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'roommates', 'fromLocalName')
    const upToPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'roommates', 'upToLocalName')
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
        filters.search.minRoommates ? setFromText(filters.search.minRoommates) : setFromText(fromPlaceHolder)
    },[filters.search.minRoommates, fromPlaceHolder])
    useEffect ( () => {
        filters.search.maxRoommates ? setUpToText(filters.search.maxRoommates) : setUpToText(upToPlaceHolder)
    },[filters.search.maxRoommates, upToPlaceHolder])

    RoommatesInput.handleClickOutside = () => {
        setIsMainOpen(false)
    }
    const subMenuSpecs = {
        min: 2,
        max: 5,
        step: 1,
        setMax: setMaxRoommates,
        setMin: setMinRoommates,
        minFilter: "minRoommates",
        maxFilter: "maxRoommates",
        from: fromText,
        upTo: upToText,
        parentRect,
    }
    return (
        <div className="roommates__input">
            <div className={`roommates-bar ${hasData?'has-data':''}`} onClick={toggleMainDropdown}>
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
    handleClickOutside: () => RoommatesInput.handleClickOutside
}   
export default onClickOutside(RoommatesInput, clickOutsideConfig)