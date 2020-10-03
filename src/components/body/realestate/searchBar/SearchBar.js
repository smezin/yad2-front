import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import SearchBarHeader from './SerachBarHeader'
import LocationSearch from './searchFields/Location'
import PropertyType from './searchFields/PropertyType'
import Rooms from './searchFields/Rooms'
import getSubPath from 'utility/getSubPath'
import fetchFromResource from 'utility/fetchFromResource'

const SearchBar = () => {

    const [category, setCategory] = useState('forsale')
    const location = useLocation()
    const pathname = location.pathname || location.location.pathname
    const categoryFromPath = getSubPath(pathname, '/realestate')
    const allCategories = fetchFromResource('object', 'realestateSearchBar', 'header', 'headerLinks') 
    const allCategoriesNames = Object.keys(allCategories).map( (category) => category)
    useEffect( () => {
        allCategoriesNames.includes(categoryFromPath) && setCategory(categoryFromPath)
    },[location, allCategoriesNames, categoryFromPath])
    
    return (
        <div className="realestate-search-bar__container">
            <div className="realestate-search-bar__header">
                <SearchBarHeader />
            </div>
            <div className="realestate-search-bar__search-columns">
                <LocationSearch />  
                <PropertyType category={category}/>
                <Rooms />

            </div>            
        </div>
    )
}

export default SearchBar