import React from 'react'
import PromotedProjectsBar from 'components/body/promotedProjects/PromotedProjectsBar'
import FeedSortFiltersRow from 'components/body/realestate/feed/feedSortFilter/FeedSortFiltesRow'
import FeedItems from './FeedItems'


const Feed = () => {

    return (
        <div className="feed">
            <PromotedProjectsBar />
            <FeedSortFiltersRow />
            <FeedItems />
        </div>
    )
}
export default Feed