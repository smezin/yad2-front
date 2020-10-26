import React, { useState, useEffect, useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext } from 'context/FiltersContext'
import RangeInputDiscrete from 'components/body/common/RangeInputDiscrete'
import { setMinFloor, setMaxFloor } from 'actions/filters.actions'

const FloorPickerInput = (props) => {
    const { filters } = useContext(FiltersContext)
    const fromPlaceHolder = fetchFromResource('string', 'advancedSearch', 'floor', 'fromLocalName')
    const upToPlaceHolder = fetchFromResource('string', 'advancedSearch', 'floor', 'upToLocalName')
    const numbersHeader = fetchFromResource('string', 'advancedSearch', 'floor', 'any')
    const [fromText, setFromText] = useState(fromPlaceHolder)
    const [upToText, setUpToText] = useState(upToPlaceHolder)
    const { parentRect } = props
   
    useEffect ( () => {
        filters.search.minFloor !== undefined ? setFromText(filters.search.minFloor) : setFromText(fromPlaceHolder)
    },[filters.search.minFloor, fromPlaceHolder])
    useEffect ( () => {
        filters.search.maxFloor !== undefined ? setUpToText(filters.search.maxFloor) : setUpToText(upToPlaceHolder)
    },[filters.search.maxFloor, upToPlaceHolder])

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
        updateAdvancedFiltersCount: true
    }
    return (
        <div className="floor-picker__input">     
            <RangeInputDiscrete  menuSpecs={subMenuSpecs} autoPosition={false} />
        </div>
        
    )
}
export default FloorPickerInput
