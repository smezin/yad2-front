import React, {useContext, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import SearchBarHeader from './SerachBarHeader'
import LocationSearch from './searchFields/Location'
import PropertyType from './searchFields/PropertyType'
import Roommates from './searchFields/Roommates'
import Rooms from './searchFields/Rooms'
import Price from './searchFields/Price'
import DealType from './searchFields/DealType'
import getSubPath from 'utility/getSubPath'
import GoSearch from './GoSearch'
import AdvancedSearch from './AdvancedSearch'
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext } from 'context/FiltersContext'
import { clearSearch, setSearchCategory } from 'actions/filters'

const SearchBar = () => {
    const [category, setCategory] = useState('forsale')
    const location = useLocation()
    const pathname = location.pathname || location.location.pathname
    const categoryFromPath = getSubPath(pathname, '/realestate')
    const allCategories = fetchFromResource('object', 'realestateSearchBar', 'header', 'headerLinks') 
    const allCategoriesNames = Object.keys(allCategories).map( (category) => category)
    const { dispatch } = useContext(FiltersContext)
    useEffect( () => {
        allCategoriesNames.includes(categoryFromPath) && setCategory(categoryFromPath)
    },[location, allCategoriesNames, categoryFromPath])

    //clear search when changing category (forsale, rent ....)
    useEffect( () => {
        dispatch(clearSearch())
        dispatch(setSearchCategory(category))
    },[category, dispatch])
    
    const renderSearchBarByCategory = () => {
        switch(category) {
            case 'forsale':
                return (
                    <React.Fragment>
                        <PropertyType category={category}/>
                        <Rooms />
                        <Price category={category}/>
                    </React.Fragment>
                )
            case 'rent':
                return (
                    <React.Fragment>
                        <PropertyType category={category}/>
                        <Rooms />
                        <Price category={category}/>
                    </React.Fragment>
                )
            case 'roommates':
                return (
                    <React.Fragment>
                        <Price category={category} />
                        <Roommates category={category} />
                        <Rooms />
                    </React.Fragment>
                )
            case 'commercial':
                return (
                    <React.Fragment>
                        <DealType category={category}/>
                        <PropertyType category={category}/>
                        <Price category={category}/>
                    </React.Fragment>
                )
            default:
                return
                //send to error handler
        }
    }
    return (
        <div className="realestate-search-bar__container">
            <div className="realestate-search-bar__header">
                <SearchBarHeader />
            </div>
            <div className="realestate-search-bar__search-columns">
                <LocationSearch category={category}/>  
                {renderSearchBarByCategory()}
                <AdvancedSearch />
                <GoSearch />
            </div>            
        </div>
    )
}

export default SearchBar