import { FeedContext } from 'context/FeedContext'
import React, { useContext } from 'react'
import FeedItem from './FeedItem'

const FeedItems = () => {
    const { feed } = useContext(FeedContext)
    const feedArr = feed.itemsFeed || []
    const byDate = (a,b)=>a.updatedAt > b.updatedAt ? -1 : 1
    const byPriceLowToHigh = (a,b) => {
        if (typeof(a.price) === 'number' && typeof(b.price) === 'number') {
            return a.price - b.price
        }
        if (typeof(a.price) === 'number') {
            return -1
        }
        if (typeof(b.price) === 'number') {
            return 1
        }
        return 0
    }
    const byPriceHighToLow = (a, b) => {
        return byPriceLowToHigh(b, a) 
    }
    feed.sort.order === 'date' && feedArr.sort(byDate)
    feed.sort.order === 'priceLowToHigh' && feedArr.sort(byPriceLowToHigh)
    feed.sort.order === 'priceHighToLow' && feedArr.sort(byPriceHighToLow)
    let filteredFeed = feed.sort.onlyWithImage ? feedArr.filter((item) => item.imageUrls.length > 0) : feedArr
    filteredFeed = feed.sort.onlyWithPrice ? filteredFeed.filter((item) => typeof(item.price) === 'number' ) : filteredFeed
    return (
        <div className="feed-items">
            {
                filteredFeed.map((item)=> (
                    <FeedItem item={item} key={item._id}/>
                ))
            }
        </div>
    )
}
export default FeedItems