import React from 'react'
import { setPrice } from 'actions/item.actions'
import fetchFromResource from 'utility/fetchFromResource'
import NumericInput from 'components/body/common/NumericInput'

const ItemPrice = () => {
    const headerLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemPrice' ,'headerLocalName') 
    return (
        <div className="item-price" >
            <div className="item-price__header">
                {headerLocalName}
            </div>
            <NumericInput setNumber={setPrice} formCategory='price' />
        </div>
    )
}
export default ItemPrice