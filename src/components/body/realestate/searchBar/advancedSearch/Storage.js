import React from 'react' 
import BlockPicker from 'components/body/common/BlockPicker'
import fetchFromResource from 'utility/fetchFromResource'
import { toggleStorage } from 'actions/filters.actions'

const Storage = () => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'storage', 'localName')
    const optionsObj = fetchFromResource('object', 'advancedSearch', 'storage', 'options')
    
    return (
        <div className="storage block-picker__container">
            <div className="storage__header block-picker__header">
                {headerLocalName}
            </div>
            <BlockPicker optionsObj={optionsObj} toggleFunc={toggleStorage} serachFilter="storage" />
        </div>
    )
}
export default Storage