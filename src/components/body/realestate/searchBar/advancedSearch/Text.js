import React from 'react' 
import fetchFromResource from 'utility/fetchFromResource'
import { setText } from 'actions/filters'

const Storage = () => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'text', 'localName')
    const optionsObj = fetchFromResource('object', 'advancedSearch', 'storage', 'options')
    
    return (
        <div className="text">
            <div className="text__header">
                {headerLocalName}
            </div>
      
        </div>
    )
}
export default Storage