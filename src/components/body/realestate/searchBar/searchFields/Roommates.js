import React, {useState, useEffect} from 'react'
import RoommatesInput from './RoommatesInput'
import fetchFromResource from 'utility/fetchFromResource'

const Roommates = () => {
    const headerLocalName = fetchFromResource('string', 'realestateSearchBar', 'roommates', 'localName')
    const [parentRect, setParentRect] = useState(0)
    const getRect = () => {
        const rect = document.getElementById('roommates').getBoundingClientRect()
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
        <div className='roommates' id="roommates" onClick={getRect}>
            <div className="roommates__header">
                {headerLocalName}
            </div>
                <RoommatesInput parentRect={parentRect} />
        </div>
    )
}
export default Roommates