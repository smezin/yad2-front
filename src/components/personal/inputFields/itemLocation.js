import React, { useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import LocationInput from 'components/body/realestate/searchBar/searchFields/LocationInput'
import { ItemContext } from 'context/ItemContext'
import { setLocation } from 'actions/item'

const ItemLocation = (props) => {
    const { category } = props
    const { dispatch } = useContext(ItemContext)
    const headerLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemLocation' ,'headerLocalName') 
    const localLoading = fetchFromResource('string', 'personal', 'itemForm', 'itemLocation', 'localLoading') 
    const placeholderLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemLocation', 'placeholderLocalName') 
    return (
        <div className="item-location">
            <div className="item-location__header">
                {headerLocalName}
            </div>
            <div className="item-location__input">
                <LocationInput category={category} localLoading={localLoading} placeholderLocalName={placeholderLocalName}
                 setLocation={setLocation} dispatch={dispatch} />
            </div>
        </div>
    )
}

export default ItemLocation