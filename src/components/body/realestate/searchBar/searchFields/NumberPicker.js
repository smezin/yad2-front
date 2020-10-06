import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const NumberPicker = (props) => {
    const menuHeader = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'any')
    const { min, max, step, downOffset} = props
    const length = Math.ceil((max - min + 1) / step) 
    const range = Array.from({length}, (_, i) => (1+i) * step).filter((num) => num>=1)
    console.log(downOffset)
    const style = {
        top: downOffset,
    }
    return (
        <div className="number-picker" dir="rtl" style={style}>
            <div className="menu-header">
               {menuHeader}
            </div>            
            { range.map((num) => (
                <div className="number" key={num}>
                {num}
                </div>
            ))}
        </div>
    )
}

export default NumberPicker