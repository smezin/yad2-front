import React from 'react'
import SearchBar from './searchBar/SearchBar'
import TopBoxesRow from './topBoxesRow/TopBoxesRow'
import FiltersContextProvider from 'context/FiltersContext'

const RealestateContent = () => {
    
    return (
        <div className="realestate-content">
            <FiltersContextProvider>
                <SearchBar />
            </FiltersContextProvider>
            <TopBoxesRow />
        </div>
    )
}

export default RealestateContent