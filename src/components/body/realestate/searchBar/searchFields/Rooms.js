import React, { useEffect, useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import RoomsInput from './RoomsInput'

const Rooms = () => {
    const localHeaderTitle = fetchFromResource('string', 'realestateSearchBar', 'rooms', 'localName')
    const [parentRect, setParentRect] = useState(0)
    const getRect = () => {
        const rect = document.getElementById('rooms').getBoundingClientRect()
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
    
    return(
        <div className="rooms" id="rooms" onClick={getRect}>
            <div className="rooms__header" >
                {localHeaderTitle}
            </div>
            <RoomsInput parentRect = {parentRect}/>
        </div>
    )
}

export default Rooms