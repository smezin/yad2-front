import { FeedContext } from 'context/FeedContext'
import React, { useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { addSeperator } from 'utility/numbersDisplay'

const FeedHeader = (props) => {
    const { category } = props
    const { feed } = useContext(FeedContext)
    const totalItems = feed && feed.totalItems
    const showingItemsPrefix = fetchFromResource('string', 'feedHeader', 'showingItemsPrefix', 'localName')
    const showingItemsPostfix = fetchFromResource('string', 'feedHeader', 'showingItemsPostfix', 'localName')
    const headerLocalName = fetchFromResource('string', 'topInfo', 'realestate', 'subCategories', category, 'localName')
    return (
        <div className="feed-header">
        <div className="feed-header__title">
            {headerLocalName}
        </div>
        <div className="feed-header__num">
            {showingItemsPrefix}{addSeperator(totalItems)}{showingItemsPostfix}
        </div>
           
        </div>
    )
}
export default FeedHeader