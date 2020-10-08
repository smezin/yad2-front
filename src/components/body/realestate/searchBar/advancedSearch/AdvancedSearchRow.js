import React from 'react'
import { CardColumns } from 'react-bootstrap'
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