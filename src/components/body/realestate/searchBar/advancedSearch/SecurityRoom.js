import React from 'react' 
import BlockPicker from 'components/body/common/BlockPicker'
import fetchFromResource from 'utility/fetchFromResource'
import { toggleSecurityRoom } from 'actions/filters.actions'

const SecurityRoom = () => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'securityRoom', 'localName')
    const optionsObj = fetchFromResource('object', 'advancedSearch', 'securityRoom', 'options')
    
    return (
        <div className="security-room block-picker__container">
            <div className="security-room__header block-picker__header">
                {headerLocalName}
            </div>
            <BlockPicker optionsObj={optionsObj} toggleFunc={toggleSecurityRoom} serachFilter="securityRoom" />
        </div>
    )
}
export default SecurityRoom