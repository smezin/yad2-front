import React from 'react'
import SearchBarHeader from './SerachBarHeader'
import LocationSearch from './searchFields/LocationSearch'

const SearchBar = () => {
    return (
        <div className="realestate-search-bar__container">
            <div className="realestate-search-bar__header">
                <SearchBarHeader />
            </div>
            <div className="realestate-search-bar__search-columns">
                <LocationSearch />                
            </div>            
        </div>
    )
}

export default SearchBar