import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const TopText = () => {
    const topText = fetchFromResource('string', 'footer', 'topText')

    return (
        <div className="top-text">
            {topText}
        </div>
    )
}
export default TopText