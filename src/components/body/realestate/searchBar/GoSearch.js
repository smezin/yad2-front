import React, { useContext, useEffect, useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { magnifyingGlass } from 'resources/specialChars'
import { FiltersContext } from 'context/FiltersContext';
import cleanFilters from 'utility/cleanFilters';
import { getFilteredFeed } from 'requests/feed.requests';
import { FeedContext } from 'context/FeedContext';
import { setFeedItems } from 'actions/feed.actions';

const GoSearch = () => {
    const { filters } = useContext(FiltersContext)
    const { dispatch } = useContext(FeedContext)
    const [feedFilters, setFeedFilters] = useState({})
    const searchLocalName = fetchFromResource('string', 'realestateSearchBar', 'goSearch', 'localName')
    const searchClicked = () => {
        setFeedFilters(cleanFilters(filters)['search'])
        console.log(feedFilters)
    }
    useEffect(() => {
        const fetchItemsFeed = async () => {
          const feedItems = (await getFilteredFeed(feedFilters)) || [];
          console.log('-->',feedItems)
          dispatch(setFeedItems(feedItems));
        };
        fetchItemsFeed();
        
      }, [feedFilters, dispatch]);
    
    return (
        <div className="go-search" onClick={searchClicked}>
            {magnifyingGlass}  <span className="go-search__header">{searchLocalName}</span> 
        </div>
    )
}
export default GoSearch