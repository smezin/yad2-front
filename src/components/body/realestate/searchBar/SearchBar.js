import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchBarHeader from './SerachBarHeader'
import getSubPath from '../../../../utility/getSubPath'

const SearchBar = (props) => {
    const mainCategory = '/realestate'
    const location = useLocation();
    const currentPath = location.pathname || location.location.pathname
    const urlPath = getSubPath(currentPath, mainCategory)
    
    return (
        <div className="realestate-search-bar__container">
            <div className="realestate-search-bar__header">
                <SearchBarHeader />
            </div>
            <div className="realestate-search-bar__search-columns">
                popo <br/>
                xima
                
            </div>
            
        </div>
    )
}

export default SearchBar