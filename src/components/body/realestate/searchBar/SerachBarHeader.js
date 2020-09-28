import React from 'react'
import { useLocation } from 'react-router-dom'
import fetchFromResource from '../../../../utility/fetchFromResource'
import getSubPath from '../../../../utility/getSubPath'

const SearchBarHeader = () => {
    const location = useLocation()
    const pathname = location.pathname || location.location.pathname
    const subUrl = getSubPath(pathname, '/realestate')
    const defaultCategory = 'forsale'
    const allCategories = fetchFromResource('searchBar', 'header', 'headerLinks')
    const allCategoriesNames = Object.keys(allCategories).map( (category) => category)
    const category = allCategoriesNames.includes(subUrl) ? subUrl : defaultCategory
  
    const categoryLocalName = fetchFromResource('searchBar', 'header', 'headerLinks', category)
    let headerPrefixLocalName = fetchFromResource('searchBar', 'header', 'headerPrefix')
    const headerSuffixLocalName = fetchFromResource('searchBar', 'header', 'headerSuffix')
    const auxLetter = fetchFromResource('searchBar', 'header', 'auxLetter')
    const alternatingCategoryName = <span className="realestate-search-bar__header__alt-cat" onClick={(e)=>onClick(e, category)}>
        {categoryLocalName}
    </span>
    
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