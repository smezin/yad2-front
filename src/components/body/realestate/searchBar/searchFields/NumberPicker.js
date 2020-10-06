import React, { useContext, useEffect, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import fetchFromResource from 'utility/fetchFromResource'
import { setMinRooms, setMaxRooms } from 'actions/filters'

const RoomsNumberPicker = (props) => {
    const { filters, dispatch } = useContext(FiltersContext)
    const [range, setRange] = useState([])
    const menuHeader = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'any')
    const { set, min, max, step, downOffset} = props
    const length = Math.ceil((max - min + 1) / step) 
    
    useEffect ( () => {
        switch(set) {
            case 'min':
                return setRange(Array.from({length}, (_, i) => (1 + i) * step)
                .filter((num) => num <= (filters.search.maxRooms || max) && num >= min))
            case 'max':
                return setRange(Array.from({length}, (_, i) => (1 + i) * step)
                .filter((num) => num >= (filters.search.minRooms || min)))   
            default:
        }
    },[filters.search.maxRooms, filters.search.minRooms, length, max, min, set, step])
  
    const style = {
        top: downOffset,
    }

    const onPick = (num) => {
        switch(set) {
            case 'min':
                return dispatch(setMinRooms(num))
            case 'max':
                return dispatch(setMaxRooms(num))
            default:
        }
    }
    return (
        <div className="number-picker" style={style}>
            <div className="menu-header" onClick={() => onPick(undefined)}>
               {menuHeader}
            </div>            
            { range.map((num) => (
                <div className="number" key={num} onClick={() => onPick(num)}>
                {num}
                </div>
            ))}
        </div>
    )
}

export default RoomsNumberPicker