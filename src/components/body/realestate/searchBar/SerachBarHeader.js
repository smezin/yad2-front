import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import fetchFromResource from 'utility/fetchFromResource'
import getSubPath from 'utility/getSubPath'

const SearchBarHeader = () => {
    const [category, setCategory] = useState('forsale')
    const location = useLocation()
    const pathname = location.pathname || location.location.pathname
    const categoryFromPath = getSubPath(pathname, '/realestate')
    const allCategories = fetchFromResource('object', 'realestateSearchBar', 'header', 'headerLinks') 
    const allCategoriesNames = Object.keys(allCategories).map( (category) => category)
    useEffect( () => {
        allCategoriesNames.includes(categoryFromPath) && setCategory(categoryFromPath)
    },[location, allCategoriesNames, categoryFromPath])
    const categoryLocalName = fetchFromResource('string', 'realestateSearchBar', 'header', 'headerLinks', category, 'localName') 
    let headerPrefixLocalName = fetchFromResource('string', 'realestateSearchBar', 'header', 'headerPrefix', 'localName') 
    const headerSuffixLocalName = fetchFromResource('string', 'realestateSearchBar', 'header', 'headerSuffix', 'localName') 
    const auxLetter = fetchFromResource('string', 'realestateSearchBar', 'header', 'auxLetter', 'localName') 
    const alternatingCategoryName = <span className="realestate-search-bar__header__alt-cat" onClick={(e)=>onClick(e, category)}>
        {categoryLocalName} </span>
    
    if (category === 'forsale' || category === 'rent') {
        headerPrefixLocalName += auxLetter
    }
    const onClick = (e, category) => {
        console.log(category)
    }
    return (
        <div className="search-bar__header">
            {headerPrefixLocalName}{alternatingCategoryName}{headerSuffixLocalName}
        </div>
    )
}

export default SearchBarHeader