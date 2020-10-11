import React from 'react'
import FloorPicker from './FloorPicker'
import SizePicker from './Size'
import EntryDate from './EntryDate'

const AdvancedSearchRow = (props) => {
    return (
        <div className="advanced-search-row">
            <FloorPicker />
            <SizePicker />
            <EntryDate />
        </div>
    )
}
export default AdvancedSearchRow