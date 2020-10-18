import React from 'react'
import SearchBar from './searchBar/SearchBar'
import TopBoxesRow from './topBoxesRow/TopBoxesRow'
import FiltersContextProvider from 'context/FiltersContext'
import Feed from './feed/Feed'

const RealestateContent = (props) => {
    const { category } = props
    return (
        <div className="realestate-content">
            <FiltersContextProvider>
                <SearchBar category={category} />
            </FiltersContextProvider>
            <TopBoxesRow />
            <Feed />
        </div>
    )
}

export default RealestateContent