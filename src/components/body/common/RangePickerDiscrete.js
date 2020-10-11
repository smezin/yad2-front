import React, { useContext, useEffect, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import setRangeFromMinMaxStep from 'utility/setRangeFromMinMaxStep'
import { incAdvancedFilters, decAdvancedFilters} from 'actions/filters'

const RangePickerDiscrete = (props) => {
    const { menuSpecs, downOffset, set } = props
    const { setMin, setMax, minFilter, maxFilter, min, max, step, numbersHeader, updateAdvancedFiltersCount } = menuSpecs
    const { filters, dispatch } = useContext(FiltersContext)
    const [range, setRange] = useState([])
    const style = {top: downOffset}
    useEffect ( () => {
        switch(set) {
            case 'min':
                return setRange(setRangeFromMinMaxStep(min, max, step)
                .filter((num) => num <= (filters.search[maxFilter] !== undefined ? filters.search[maxFilter] : max) 
                && num >= min))
            case 'max':
                return setRange(setRangeFromMinMaxStep(min, max, step)
                .filter((num) => num >= (filters.search[minFilter] !== undefined ? filters.search[minFilter] : min)
                 && num <= max))   
            default:
        }
    },[dispatch, filters.search, min, max, set, minFilter, maxFilter, step])
  
    const clearPick = () => {
        onPick(undefined)
    }
    const onPick = (pickedNum) => {
        updateAdvancedFiltersCount && updateFiltersCount(pickedNum)
        switch(set) {
            case 'min':
                return dispatch(setMin(pickedNum))
            case 'max':
                return dispatch(setMax(pickedNum))
            default:
        }
    }
    const updateFiltersCount = (isNumber) => {
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
    return (
        <div className="number-picker" style={style}>
            <div className="menu-header" onClick={() => clearPick()}>
               {numbersHeader}
            </div>            
            {range.map((num) => (
                <div className="number" key={num} onClick={() => onPick(num)}>
                {num}
                </div>
            ))}
        </div>
    )
}
export default RangePickerDiscrete