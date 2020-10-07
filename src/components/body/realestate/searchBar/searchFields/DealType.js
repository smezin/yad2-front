import React from 'react'
import DealTypeInput from './DealTypeInput'
import fetchFromResource from 'utility/fetchFromResource'

const DealType = () => {
    const headerLocalName = fetchFromResource('string', 'realestateSearchBar', 'dealType', 'localName')
    
    
    return (
        <div className='deal-type'>
            <div className='deal-type__header'>
                {headerLocalName} 
            </div>
            <DealTypeInput />
        </div>
    )
}
export default DealType