import React, { useContext, useEffect } from 'react'
import PromotedProjectsBar from 'components/body/promotedProjects/PromotedProjectsBar'
import FeedSortFiltersRow from 'components/body/realestate/feed/feedSortFilter/FeedSortFiltesRow'
import FeedItems from './FeedItems'
import { useLocation } from 'react-router-dom'
import getSubPath from 'utility/getSubPath'
import { getCategoryFeed, setFeedItems } from 'actions/feed.actions'
import { FeedContext } from 'context/FeedContext'

const Feed =  () => {
    const location = useLocation()
    const pathname = location.pathname || location.location.pathname
    const category = getSubPath(pathname, '/realestate')
    const { feed, dispatch } = useContext(FeedContext)

    useEffect(() => {
        async function fetchData() {
            const feedItems = await getCategoryFeed(category)
            dispatch(setFeedItems(feedItems))
        }
        fetchData();
      }, [category, dispatch])

    console.log(feed)
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