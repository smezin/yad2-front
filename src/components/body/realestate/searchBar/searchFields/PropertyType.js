import React from 'react'
import PropertyTypeInput from './PropertyTypeInput'
import fetchFromResource from 'utility/fetchFromResource'

const PropertyType = (props) => {
    const { category } = props
    const localHeaderTitle = fetchFromResource('string', 'realestateSearchBar', 'propertyType', 'localName')
    return(
        <div className="property-type">
            <div className="property-type__header" dir="rtl">
                {localHeaderTitle}
            </div>
            <div className="property-type__input" dir="rtl">
                <PropertyTypeInput category={category}/>
            </div>
        </div>
    )
}
export default PropertyType