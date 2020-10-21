import { sampleItemOne, sampleItemThree, sampleItemTwo } from 'data/fixtures/item'
import React from 'react'
import FeedItem from './FeedItem'

const FeedItems = (props) => {
    //const { items } = props
    const items = [sampleItemOne, sampleItemTwo, sampleItemThree]
    return (
        <div className="feed-items">
            {
                items.map((item)=> (
                    <FeedItem item={item} key={item.id}/>
                ))
            }
        </div>
    )
}
export default FeedItems