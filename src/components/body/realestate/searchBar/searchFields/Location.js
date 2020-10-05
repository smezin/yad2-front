import React from 'react'
import LocationSearchInput from './LocationInput'
import fetchFromResource from 'utility/fetchFromResource'

const LocationSearch = (props) => {
    const { category } = props
    const localHeaderTitle = fetchFromResource('string', 'realestateSearchBar', 'searchFields', 'location', 'localTitle') 

    return (
        <div className="location-search">
            <div className="location-search__header">
                {localHeaderTitle}
            </div>
            <div className="location-search__input">
                <LocationSearchInput category={category}/>
            </div>

        </div>
    )
}

export default LocationSearch