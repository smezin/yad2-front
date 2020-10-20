import React from 'react'
import PromotedProjectsBar from 'components/body/promotedProjects/PromotedProjectsBar'
import FeedSortFiltersRow from 'components/body/realestate/searchBar/feedSortFilter/FeedSortFiltesRow'

const Feed = () => {


    return (
        <div className="feed">
            <PromotedProjectsBar />
            <FeedSortFiltersRow />
        </div>
    )
}
export default Feed