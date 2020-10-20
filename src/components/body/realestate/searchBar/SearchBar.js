import React, {useContext, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import SearchBarHeader from './SerachBarHeader'
import LocationSearch from './regularSearch/Location'
import PropertyType from './regularSearch/PropertyType'
import Roommates from './regularSearch/Roommates'
import Rooms from './regularSearch/Rooms'
import Price from './regularSearch/Price'
import DealType from './regularSearch/DealType'
import getSubPath from 'utility/getSubPath'
import GoSearch from './GoSearch'
import AdvancedSearch from './advancedSearch/AdvancedSearch'
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
    const [parentRect, setParentRect] = useState()

    useEffect( () => {
        allCategoriesNames.includes(categoryFromPath) && setCategory(categoryFromPath)
    },[location, allCategoriesNames, categoryFromPath])

    const getRect = () => {
        setParentRect(document.getElementById('realestate-search-bar__container') ? 
            document.getElementById('realestate-search-bar__container').getBoundingClientRect() : 0)
    }
    useEffect(() => {
        getRect()
        const resizeListener = () => {
            getRect()
        }
        window.addEventListener('resize', resizeListener)
        return function cleanup () {
            window.removeEventListener('resize', resizeListener)
        }
    },[])

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
        <div className="realestate-search-bar__container" id="realestate-search-bar__container">
            <div className="realestate-search-bar__header">
                <SearchBarHeader />
            </div>
            <div className="realestate-search-bar__search-columns">
                <LocationSearch category={category}/>  
                {renderSearchBarByCategory()}
                <AdvancedSearch category={category} parentRect={parentRect}/>
                <GoSearch />
            </div>            
        </div>
    )
}
export default SearchBar