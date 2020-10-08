import React, { useContext, useEffect, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import fetchFromResource from 'utility/fetchFromResource'
import setRangeFromMinMaxStep from 'utility/setRangeFromMinMaxStep'

const NumberPicker = (props) => {
    const { menuSpecs, downOffset, set } = props
    const { setMin, setMax, minFilter, maxFilter, min, max, step, numbersHeader } = menuSpecs
    const { filters, dispatch } = useContext(FiltersContext)
    const [range, setRange] = useState([])
  
    useEffect ( () => {
        switch(set) {
            case 'min':
                return setRange(setRangeFromMinMaxStep(min, max, step)
                .filter((num) => num <= (filters.search[maxFilter] || max) && num >= min))
            case 'max':
                return setRange(setRangeFromMinMaxStep(min, max, step)
                .filter((num) => num >= (filters.search[minFilter] || min) && num <= max))   
            default:
        }
    },[dispatch, filters.search, min, max, set, minFilter, maxFilter, step])
  
    const style = {
        top: downOffset,
    }

    const onPick = (num) => {
        switch(set) {
            case 'min':
                return dispatch(setMin(num))
            case 'max':
                return dispatch(setMax(num))
            default:
        }
    }

    return (
        <div className="number-picker" style={style}>
            <div className="menu-header" onClick={() => onPick(undefined)}>
               {numbersHeader}
            </div>            
            { range.map((num) => (
                <div className="number" key={num} onClick={() => onPick(num)}>
                {num}
                </div>
            ))}
        </div>
    )
}

export default NumberPicker