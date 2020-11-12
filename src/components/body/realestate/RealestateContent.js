import React from 'react'
import SearchBar from './searchBar/SearchBar'
import TopBoxesRow from './topBoxesRow/TopBoxesRow'
import FiltersContextProvider from 'context/FiltersContext'
import Feed from './feed/Feed'
import FeedContextProvider from 'context/FeedContext'

const RealestateContent = () => {
    return (
        <div className="realestate-content">
            <FiltersContextProvider>
                <FeedContextProvider>
                    <SearchBar />            
                    <TopBoxesRow /> 
                    <Feed />
                </FeedContextProvider>               
            </FiltersContextProvider>
        </div>
    )
}
export default RealestateContent