import React, { useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { circledPlus } from 'resources/specialChars'

const AdvancedSearch = () => {

    const [buttonText, setButtonText] = useState(fetchFromResource('string', 'realestateSearchBar', 'advancedSearch', 'localName'))


    return (
        <div className="advanced-search">
           {circledPlus} {buttonText}
        </div>
    )
}
export default AdvancedSearch