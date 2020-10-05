import React, {useContext, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import SearchBarHeader from './SerachBarHeader'
import LocationSearch from './searchFields/Location'
import PropertyType from './searchFields/PropertyType'
import Rooms from './searchFields/Rooms'
import getSubPath from 'utility/getSubPath'
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext} from 'context/FiltersContext'
import { clearSearch, setSearchCategory } from 'actions/filters'

const SearchBar = () => {
    const [category, setCategory] = useState('forsale')
    const location = useLocation()
    const pathname = location.pathname || location.location.pathname
    const categoryFromPath = getSubPath(pathname, '/realestate')
    const allCategories = fetchFromResource('object', 'realestateSearchBar', 'header', 'headerLinks') 
    const allCategoriesNames = Object.keys(allCategories).map( (category) => category)
    const { filters, dispatch } = useContext(FiltersContext)
    useEffect( () => {
        allCategoriesNames.includes(categoryFromPath) && setCategory(categoryFromPath)
    },[location, allCategoriesNames, categoryFromPath])

    //clear search when changing category (forsale, rent ....)
    useEffect( () => {
        dispatch(clearSearch())
        dispatch(setSearchCategory(category))
    },[category, dispatch])
    
    console.log('from SearchBar: ', filters)
    
    return (
        <div className="realestate-search-bar__container">
            <div className="realestate-search-bar__header">
                <SearchBarHeader />
            </div>
            <div className="realestate-search-bar__search-columns">
                <LocationSearch category={category}/>  
                <PropertyType category={category}/>
                <Rooms />

            </div>            
        </div>
    )
}

export default SearchBar