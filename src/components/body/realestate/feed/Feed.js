import React from 'react'
import PromotedProjectsBar from 'components/body/promotedProjects/PromotedProjectsBar'
import FeedSortFiltersRow from 'components/body/realestate/feed/feedSortFilter/FeedSortFiltesRow'
import FeedItems from './FeedItems'
import { useLocation } from 'react-router-dom'
import getSubPath from 'utility/getSubPath'


const Feed = () => {
    const location = useLocation()
    const pathname = location.pathname || location.location.pathname
    const category = getSubPath(pathname, '/realestate')
    console.log(category, 'cat')
    return (
        <div className="feed">
            {
                category === 'forsale' &&
                <PromotedProjectsBar />
            }
            <FeedSortFiltersRow />
            <FeedItems />
        </div>
    )
}
export default Feed