import React from 'react' 
import BlockPicker from 'components/body/common/BlockPicker'
import fetchFromResource from 'utility/fetchFromResource'
import { toggleSplit } from 'actions/filters.actions'

const Split = () => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'split', 'localName')
    const optionsObj = fetchFromResource('object', 'advancedSearch', 'split', 'options')
    
    return (
        <div className="split block-picker__container">
            <div className="split__header block-picker__header">
                {headerLocalName}
            </div>
            <BlockPicker optionsObj={optionsObj} toggleFunc={toggleSplit} serachFilter="split" />
        </div>
    )
}
export default Split