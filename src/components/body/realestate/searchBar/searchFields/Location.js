import React from 'react'
import LocationSearchInput from './LocationInput'
import fetchFromResource from 'utility/fetchFromResource'

const LocationSearch = (props) => {
    const { category } = props
    const headerLocalName = fetchFromResource('string', 'realestateSearchBar', 'searchFields', 'location', 'localTitle') 

    return (
        <div className="location-search">
            <div className="location-search__header">
                {headerLocalName}
            </div>
            <div className="location-search__input">
                <LocationSearchInput category={category}/>
            </div>

        </div>
    )
}

export default LocationSearch