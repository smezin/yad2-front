import React from 'react'
import SearchBar from './searchBar/SearchBar'
import TopBoxesRow from './topBoxesRow/TopBoxesRow'
import FiltersContextProvider from 'context/FiltersContext'
import Feed from './feed/Feed'

const RealestateContent = () => {
    return (
        <div className="realestate-content">
            <FiltersContextProvider>
                <SearchBar />            
                <TopBoxesRow />
                <Feed />
            </FiltersContextProvider>
        </div>
    )
}

export default RealestateContent