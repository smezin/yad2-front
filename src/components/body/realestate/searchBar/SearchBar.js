import React from 'react'
import SearchBarHeader from './SerachBarHeader'

const SearchBar = (props) => {

    return (
        <div className="realestate-search-bar__container">
            <div className="realestate-search-bar__header">
                <SearchBarHeader category="rent"/>
            </div>
            <div className="realestate-search-bar__search-columns">
                popo <br/>
                xima
            </div>
            
        </div>
    )
}

export default SearchBar