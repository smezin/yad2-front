import React from 'react'
import MediaBox from './MediaBox'
import { topBoxesRow } from 'ads'

const TopBoxesRow = () => {
    const boxes = Object.keys(topBoxesRow).map((box) => topBoxesRow[box])

    return (
        <div className="top-boxes-row">
        {
            boxes.map((box) => (
                <MediaBox box={box} key={box.path}/>
            ))
        }   
        </div>
    )
}
export default TopBoxesRow