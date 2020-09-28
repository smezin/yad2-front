import React from 'react'
import fetchFromResource from '../../../../utility/fetchFromResource'

const SearchBarHeader = (props) => {

    const { category } = props
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