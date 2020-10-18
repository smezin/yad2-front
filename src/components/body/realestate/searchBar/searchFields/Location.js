import React, { useContext } from 'react'
import LocationSearchInput from './LocationInput'
import { setLocation } from 'actions/filters'
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext } from 'context/FiltersContext'

const LocationSearch = (props) => {
    const { category } = props
    const headerLocalName = fetchFromResource('string', 'realestateSearchBar', 'searchFields', 'location', 'localTitle') 
    const localLoading = fetchFromResource('string', 'realestateSearchBar', 'searchFields', 'location', 'localLoading') 
    const localPlaceholder = fetchFromResource('string', 'realestateSearchBar', 'searchFields', 'location', 'localPlaceholder') 
    const { dispatch } = useContext(FiltersContext)
    return (
        <div className="location-search">
            <div className="location-search__header">
                {headerLocalName}
            </div>
            <div className="location-search__input">
                <LocationSearchInput category={category} localLoading={localLoading} localPlaceholder={localPlaceholder} 
                    setLocation={setLocation} dispatch={dispatch}
                />
            </div>

        </div>
    )
}

export default LocationSearch