import React from 'react' 
import BlockPicker from 'components/body/common/BlockPicker'
import fetchFromResource from 'utility/fetchFromResource'
import { toggleRooms } from 'actions/filters.actions'

const CommercialRooms = () => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'rooms', 'localName')
    const optionsObj = fetchFromResource('object', 'advancedSearch', 'rooms', 'options')
    
    return (
        <div className="commercial-rooms block-picker__container">
            <div className="commercial-rooms__header block-picker__header">
                {headerLocalName}
            </div>
            <BlockPicker optionsObj={optionsObj} toggleFunc={toggleRooms} serachFilter="rooms" />
        </div>
    )
}
export default CommercialRooms