import React from 'react'
import SearchBarHeader from './SerachBarHeader'
import LocationSearchInput from './TempComp'

const SearchBar = (props) => {
    return (
        <div className="realestate-search-bar__container">
            <div className="realestate-search-bar__header">
                <SearchBarHeader />
            </div>
            <div className="realestate-search-bar__search-columns">
                <LocationSearchInput />
                
            </div>
            
        </div>
    )
}

export default SearchBar