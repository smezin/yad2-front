import React, { useContext, useEffect, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import { incAdvancedFilters, decAdvancedFilters} from 'actions/filters'
import isNumeric from 'utility/isNumeric'
import { addSeperator, removeSeperator} from 'utility/numbersDisplay'

const RangePicker = (props) => {
    const { category, rangeSpecs } = props
    const { headerLocalName, minPlaceHolder, maxPlaceHolder, setMin, setMax, minFilter, maxFilter, updateAdvancedFiltersCount } = rangeSpecs
    const { dispatch, filters } = useContext(FiltersContext)
    const [minDisplay, setMinDisplay] = useState(addSeperator(filters.search[minFilter]) || minPlaceHolder)
    const [maxDisplay, setMaxDisplay] = useState(addSeperator(filters.search[maxFilter]) || maxPlaceHolder)

    const onBlur = (e, set) => {
        if (e.target.value === '') {
            switch(set) {
                case 'min':
                    return setMinDisplay(minPlaceHolder)
                case 'max':
                    return setMaxDisplay(maxPlaceHolder)
                default: 
                    return
            } 
        }
    }
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
    const clearPlaceHolder = (e, set) => {
        if (e.target.value === minPlaceHolder || e.target.value === maxPlaceHolder) {
            e.target.value = ''
            switch(set) {
                case 'min':
                    return setMinDisplay('')
                case 'max':
                    return setMaxDisplay('')
                default:
                    return
            }
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
    
    return (
        <div className="range-picker">
            <div className="range-picker__header">
              {headerLocalName}
            </div>
            <div className="range-picker__input-container">
                <input className={`range-picker__min ${minDisplay !== minPlaceHolder ? 'has-data':''}`} type="text" value={minDisplay} 
                onChange={(e) => handleChange(e, 'min')} onFocus={(e) => clearPlaceHolder(e, 'min')} onBlur={(e) => onBlur(e, 'min')} />
                <input className={`range-picker__max ${maxDisplay !== maxPlaceHolder ? 'has-data':''}`} type="text" value={maxDisplay} 
                onChange={(e) => handleChange(e, 'max')} onFocus={(e) => clearPlaceHolder(e, 'max')} onBlur={(e) => onBlur(e, 'max')} />
            </div>
        </div>
    )
}
export default RangePicker