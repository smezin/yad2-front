import { setText } from 'actions/filters'
import { ItemContext } from 'context/ItemContext'
import React, { useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const ItemText = () => {
    const { dispatch } = useContext(ItemContext)
    const headerLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemText', 'headerLocalName')
    const placeholderLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemText', 'placeholderLocalName')
    
    const onChange = (e) => {
        dispatch(setText(e.target.value))
    }
    return (
        <div className="item-text">
            <div className="item-text__header">{headerLocalName} </div>
            <textarea className="item-text__input" onChange={(e)=>onChange(e)} placeholder={placeholderLocalName} />
        </div>
        
    )
}
export default ItemText