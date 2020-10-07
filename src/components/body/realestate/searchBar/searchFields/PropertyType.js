import React from 'react'
import PropertyTypeInput from './PropertyTypeInput'
import fetchFromResource from 'utility/fetchFromResource'

const PropertyType = (props) => {
    const { category } = props
    const headerLocalName = fetchFromResource('string', 'realestateSearchBar', 'propertyType', 'localName')
    return(
        <div className="property-type">
            <div className="property-type__header" dir="rtl">
                {headerLocalName}
            </div>
                <PropertyTypeInput category={category}/>
        </div>
    )
}
export default PropertyType