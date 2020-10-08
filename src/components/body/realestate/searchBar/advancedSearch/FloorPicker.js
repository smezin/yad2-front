import React, {useState, useEffect} from 'react'
import FloorPickerInput from './FloorPickerInput'
import fetchFromResource from 'utility/fetchFromResource'

const FloorPicker = () => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'floor', 'localName')
    const [parentRect, setParentRect] = useState(0)
    const getRect = () => {
        const rect = document.getElementById('flooer-picker') 
        setParentRect(rect ? rect : 0)
    }
    useEffect(() => {
        const resizeListener = () => {
            getRect()
        }
        window.addEventListener('resize', resizeListener)
        return function cleanup () {
            window.removeEventListener('resize', resizeListener)
        }
    },[])
    
    return (
        <div className='floor-picker' id="floor-picker" onClick={getRect}>
            <div className="floorPicker__header">
                {headerLocalName}
            </div>
                {/* <FloorPickerInput parentRect={parentRect} /> */}
        </div>
    )
}
export default FloorPicker