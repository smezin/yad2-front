import React, { useContext, useEffect, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import setRangeFromMinMaxStep from 'utility/setRangeFromMinMaxStep'
import { incAdvancedFilters, decAdvancedFilters} from 'actions/filters'

const NumberPicker = (props) => {
    const { menuSpecs, downOffset, set } = props
    const { setMin, setMax, minFilter, maxFilter, min, max, step, numbersHeader } = menuSpecs
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
        switch(set) {
            case 'min':
                (filters.search[minFilter] === undefined && pickedNum !== undefined) && dispatch(incAdvancedFilters());
                (filters.search[minFilter] !== undefined && pickedNum === undefined) && dispatch(decAdvancedFilters())
                return dispatch(setMin(pickedNum))
            case 'max':
                (filters.search[maxFilter] === undefined && pickedNum !== undefined) && dispatch(incAdvancedFilters());
                (filters.search[maxFilter] !== undefined && pickedNum === undefined) && dispatch(decAdvancedFilters())
                return dispatch(setMax(pickedNum))
            default:
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

export default NumberPicker