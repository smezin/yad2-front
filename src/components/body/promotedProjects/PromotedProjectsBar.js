import React, { useEffect, useState } from 'react'
import PromotedProject from 'components/body/promotedProjects/PromotedProject'
import { getCategoryFeed } from 'requests/feed.requests'


const PromotedProjectsBar = () => {
    const [promotedItems, setPromotedItems] = useState([])
    useEffect(() => {
        const fetchPromotedItems = async () => {
          const promotedItemsFeed = (await getCategoryFeed('promoted')) || [];
          setPromotedItems(promotedItemsFeed)
        }
        fetchPromotedItems();
    }, [])
    let mutableItemsList = promotedItems.map((item) => item)
    const promotedItem1 = mutableItemsList.length > 0 ? 
    mutableItemsList[Math.floor(Math.random() * mutableItemsList.length)] : undefined
    mutableItemsList = mutableItemsList.filter((item) => item._id.localeCompare(promotedItem1._id))
    const promotedItem2 = mutableItemsList.length > 0 ? 
    mutableItemsList[Math.floor(Math.random() * mutableItemsList.length)] : undefined
    mutableItemsList = mutableItemsList.filter((item) => item._id.localeCompare(promotedItem2._id))
    const promotedItem3 = mutableItemsList.length > 0 ? 
    mutableItemsList[Math.floor(Math.random() * mutableItemsList.length)] : undefined
    return ( //can add 'color' prop to set ribbons color. 'main' and 'alt' are preset colors"
        <div className="promoted-projects-bar">
            <PromotedProject item={promotedItem1} color="main" />
            <PromotedProject item={promotedItem2} color="main" />
            <PromotedProject item={promotedItem3} color="alt" />
        </div>
    )
}
export default PromotedProjectsBar