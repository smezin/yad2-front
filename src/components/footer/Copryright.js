import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const Copyright = () => {
    const copyrightText = fetchFromResource('string', 'footer', 'copyright')

    return (
        <div className="copyright">
            {copyrightText}
        </div>
    )
}
export default Copyright