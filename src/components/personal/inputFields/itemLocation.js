import React from 'react'
import LocationSearchInput from './LocationInput'
import fetchFromResource from 'utility/fetchFromResource'

const ItemLocation = (props) => {
    const { category } = props
    const headerLocalName = fetchFromResource('string', 'realestateSearchBar', 'searchFields', 'location', 'localTitle') 

    return (
        <div className="item-location">
            <div className="item-location__header">
                {headerLocalName}
            </div>
            <div className="item-location__input">
                <LocationSearchInput category={category}/>
            </div>

        </div>
    )
}

export default ItemLocation