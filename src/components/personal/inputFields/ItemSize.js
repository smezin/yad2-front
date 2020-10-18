import React from 'react'
import { setSize } from 'actions/item'
import fetchFromResource from 'utility/fetchFromResource'
import NumericInput from 'components/body/common/NumericInput'

const ItemSize = () => {
    const headerLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemSize' ,'headerLocalName') 
    
    return (
        <div className="item-size" >
            <div className="item-size__header">
                {headerLocalName}
            </div>
            <NumericInput setNumber={setSize} formCategory='size' />
        </div>
    )
}
export default ItemSize