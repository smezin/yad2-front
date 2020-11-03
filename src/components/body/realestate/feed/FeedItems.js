import { FeedContext } from 'context/FeedContext'
//import { sampleItemOne, sampleItemThree, sampleItemTwo } from 'data/fixtures/item'
import React, { useContext } from 'react'
import FeedItem from './FeedItem'

const FeedItems = () => {
    const { feed } = useContext(FeedContext)
    const feedArr = feed.itemsFeed
    //const items = [sampleItemOne, sampleItemTwo, sampleItemThree]
    return (
        <div className="feed-items">
            {
                feedArr.map((item)=> (
                    <FeedItem item={item} key={item._id}/>
                ))
            }
        </div>
    )
}
export default FeedItems