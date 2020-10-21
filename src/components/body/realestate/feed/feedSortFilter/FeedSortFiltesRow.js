import React from 'react'
import ShowOnly from './ShowOnly'
import SortBy from './SortBy'


const FeedSortFiltersRow = () => {

    return (
        <div className="feed-sort-filters-row">
            <SortBy />
            <ShowOnly />
        </div>
    )
}
export default FeedSortFiltersRow