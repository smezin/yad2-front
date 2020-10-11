import React from 'react'
import FloorPicker from './FloorPicker'
import SizePicker from './Size'

const AdvancedSearchRow = (props) => {
    const { toggleNumOfPicks } = props
    return (
        <div className="advanced-search-row">
            <FloorPicker toggleNumOfPicks={toggleNumOfPicks} />
            <SizePicker toggleNumOfPicks={toggleNumOfPicks} />
        </div>
    )
}
export default AdvancedSearchRow