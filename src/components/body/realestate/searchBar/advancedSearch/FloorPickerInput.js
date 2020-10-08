import React, { useState, useEffect, useContext } from 'react'
import onClickOutside from 'react-onclickoutside'
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext } from 'context/FiltersContext'
import FromToInput from 'components/body/common/FromToInput'
import { setMinFloor, setMaxFloor } from 'actions/filters'

function FloorPickerInput (props)  
{
    const { filters } = useContext(FiltersContext)
    const fromPlaceHolder = fetchFromResource('string', 'advancedSearch', 'floor', 'fromLocalName')
    const upToPlaceHolder = fetchFromResource('string', 'advancedSearch', 'floor', 'upToLocalName')
    const numbersHeader = fetchFromResource('string', 'advancedSearch', 'floor', 'any')
    const [fromText, setFromText] = useState(fromPlaceHolder)
    const [upToText, setUpToText] = useState(upToPlaceHolder)
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const { parentRect, toggleNumOfPicks } = props
   
    useEffect ( () => {
        filters.search.minFloor !== undefined ? setFromText(filters.search.minFloor) : setFromText(fromPlaceHolder)
    },[filters.search.minFloor, fromPlaceHolder])
    useEffect ( () => {
        filters.search.maxFloor !== undefined ? setUpToText(filters.search.maxFloor) : setUpToText(upToPlaceHolder)
    },[filters.search.maxFloor, upToPlaceHolder])

    FloorPickerInput.handleClickOutside = () => {
        setIsDropDownOpen(false)
    }

    const subMenuSpecs = {
        numbersHeader,
        min: 0,
        max: 16,
        step: 1,
        setMax: setMaxFloor,
        setMin: setMinFloor,
        minFilter: "minFloor",
        maxFilter: "maxFloor",
        from: fromText,
        upTo: upToText,
        parentRect,
    }
    return (
        <div className="floor-picker__input">     
            <FromToInput  menuSpecs={subMenuSpecs} autoPosition={false} toggleNumOfPicks={toggleNumOfPicks} />
        </div>
        
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => FloorPickerInput.handleClickOutside
}   
export default onClickOutside(FloorPickerInput, clickOutsideConfig)