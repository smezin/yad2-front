import React from 'react'
import FloorPicker from './FloorPicker'

const AdvancedSearchRow = (props) => {
    const { toggleNumOfPicks } = props
    return (
        <div className="advanced-search-row">
            <FloorPicker toggleNumOfPicks={toggleNumOfPicks}/>
        </div>
    )
}
export default AdvancedSearchRow