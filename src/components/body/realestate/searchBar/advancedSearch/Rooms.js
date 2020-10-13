import React from 'react' 
import BlockPicker from 'components/body/common/BlockPicker'
import fetchFromResource from 'utility/fetchFromResource'
import { toggleRooms } from 'actions/filters'

const SecurityRoom = () => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'rooms', 'localName')
    const optionsObj = fetchFromResource('object', 'advancedSearch', 'rooms', 'options')
    
    return (
        <div className="rooms block-picker__container">
            <div className="rooms__header block-picker__header">
                {headerLocalName}
            </div>
            <BlockPicker optionsObj={optionsObj} toggleFunc={toggleRooms} serachFilter="rooms" />
        </div>
    )
}
export default SecurityRoom