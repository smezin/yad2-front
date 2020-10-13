import React, { useContext, useEffect, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import { incAdvancedFilters, decAdvancedFilters } from 'actions/filters'
import isNumeric from 'utility/isNumeric'
import { addSeperator, removeSeperator} from 'utility/numbersDisplay'

const RangePickerContinuous = (props) => {
    const { rangeSpecs } = props
    const { headerLocalName, minPlaceHolder, maxPlaceHolder, setMin, setMax, minFilter, maxFilter, updateAdvancedFiltersCount } = rangeSpecs
    const { dispatch, filters } = useContext(FiltersContext)
    const [minDisplay, setMinDisplay] = useState(addSeperator(filters.search[minFilter]))
    const [maxDisplay, setMaxDisplay] = useState(addSeperator(filters.search[maxFilter]))

    const handleChange = (e, set) => {
        let isNumber = undefined
        if (isNumeric(removeSeperator(e.target.value))) {
            isNumber = true
            switch(set) {
                case 'min':
                    setMinDisplay(addSeperator(removeSeperator(e.target.value)))
                    break
                case 'max':
                    setMaxDisplay(addSeperator(removeSeperator(e.target.value)))
                    break
                default:
                    return
            }
        } else {
            isNumber = false
            e.target.value=''
            switch(set) {
                case 'min':
                    setMinDisplay('')
                    break
                case 'max':
                    setMaxDisplay('')
                    break
                default:
                    break
            }   
        }
        updateAdvancedFiltersCount && updateFiltersCount(set, isNumber)
    }
    const updateFiltersCount = (set, isNumber) => {
        if (!updateAdvancedFiltersCount) {
            return
        }
        switch(set) {
            case 'min':
                (filters.search[minFilter] === undefined && isNumber ) && dispatch(incAdvancedFilters());
                (filters.search[minFilter] !== undefined && !isNumber ) && dispatch(decAdvancedFilters());
                break
            case 'max':
                (filters.search[maxFilter] === undefined && isNumber ) && dispatch(incAdvancedFilters());
                (filters.search[maxFilter] !== undefined && !isNumber ) && dispatch(decAdvancedFilters());
                break
            default:
                break
        }
    }

    useEffect( () => {        
        isNumeric(removeSeperator(minDisplay)) ? dispatch(setMin(parseFloat(removeSeperator(minDisplay)))) 
        : dispatch(setMin(undefined))
    },[minDisplay, setMin, dispatch])

    useEffect( () => {
        isNumeric(removeSeperator(maxDisplay)) ? dispatch(setMax(parseFloat(removeSeperator(maxDisplay)))) 
        : dispatch(setMax(undefined))
    },[maxDisplay, setMax, dispatch])

    // useEffect( () => {
    //     setMinDisplay(filters.search.minSize)
    //     setMaxDisplay(filters.search.maxSize)
    // },[filters.numOfAdvancedFilters, filters.search.maxSize, filters.search.minSize])

    return (
        <div className="range-picker">
            <div className="range-picker__header">
              {headerLocalName}
            </div>
            <div className="range-picker__input-container">
                <input className="range-picker__min" type="text" onChange={(e) => handleChange(e, 'min')}
                placeholder={minPlaceHolder} value={minDisplay} />
                <input className="range-picker__max" type="text" onChange={(e) => handleChange(e, 'max')} 
                placeholder={maxPlaceHolder} value={maxDisplay} />
            </div>
        </div>
    )
}
export default RangePickerContinuous