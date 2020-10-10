import React, { useContext, useEffect, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import isNumeric from 'utility/isNumeric'
import { addSeperator, removeSeperator} from 'utility/numbersDisplay'

const RangePicker = (props) => {
    const { category, rangeSpecs, toggleNumOfPicks } = props
    const { headerLocalName, minPlaceHolder, maxPlaceHolder, setMin, setMax, minFilter, maxFilter } = rangeSpecs
    const { dispatch, filters } = useContext(FiltersContext)
    const [minDisplay, setMinDisplay] = useState(filters.search[minFilter] || minPlaceHolder)
    const [maxDisplay, setMaxDisplay] = useState(filters.search[maxFilter] || maxPlaceHolder)

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
        if (isNumeric(removeSeperator(e.target.value))) {
            switch(set) {
                case 'min':
                    return setMinDisplay(addSeperator(removeSeperator(e.target.value)))
                case 'max':
                    return setMaxDisplay(addSeperator(removeSeperator(e.target.value)))
                default:
                    return
            }
        } else {
            e.target.value=''
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
    
    useEffect( () => {
        setMinDisplay(minPlaceHolder)
        setMaxDisplay(maxPlaceHolder)
    },[category, minPlaceHolder, maxPlaceHolder])
    
    useEffect ( () => {
        filters.search[minFilter] && setMinDisplay(filters.search[minFilter])
        filters.search[maxFilter] && setMaxDisplay(filters.search[maxFilter])
    },[filters.search, maxFilter, minFilter])
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