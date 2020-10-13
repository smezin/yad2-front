import React from 'react' 
import BlockPicker from 'components/body/common/BlockPicker'
import fetchFromResource from 'utility/fetchFromResource'
import { toggleRestroom } from 'actions/filters'

const Restroom = () => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'restroom', 'localName')
    const optionsObj = fetchFromResource('object', 'advancedSearch', 'restroom', 'options')
    
    return (
        <div className="restroom block-picker__container">
            <div className="restroom__header block-picker__header">
                {headerLocalName}
            </div>
            <BlockPicker optionsObj={optionsObj} toggleFunc={toggleRestroom} serachFilter="restroom" />
        </div>
    )
}
export default Restroom