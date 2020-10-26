import React from 'react' 
import BlockPicker from 'components/body/common/BlockPicker'
import fetchFromResource from 'utility/fetchFromResource'
import { toggleBalcony } from 'actions/filters.actions'

const Balcony = () => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'balcony', 'localName')
    const optionsObj = fetchFromResource('object', 'advancedSearch', 'balcony', 'options')
    
    return (
        <div className="balcony block-picker__container">
            <div className="balcony__header block-picker__header">
                {headerLocalName}
            </div>
            <BlockPicker optionsObj={optionsObj} toggleFunc={toggleBalcony} serachFilter="balcony" />
        </div>
    )
}
export default Balcony