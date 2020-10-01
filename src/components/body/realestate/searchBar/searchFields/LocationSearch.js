import React from 'react'
import LocationSearchInput from './LocationSearchInput'
import fetchFromResource from 'utility/fetchFromResource'

const LocationSearch = () => {
    const localHeaderTitle = fetchFromResource('realestateSearchBar', 'searchFields', 'location', 'localTitle') || ''

    return (
        <div className="location-search">
            <div className="location-search__header">
                {localHeaderTitle}
            </div>
            <div className="location-search__input">
                <LocationSearchInput />
            </div>

        </div>
    )
}

export default LocationSearch