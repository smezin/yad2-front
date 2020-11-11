import React, { useEffect, useState } from 'react'
import PromotedProject from 'components/body/promotedProjects/PromotedProject'
import { getCategoryFeed } from 'actions/feed.actions';

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
    return ( 
        <div className="promoted-projects-bar">
            <PromotedProject item={promotedItem1} />
            <PromotedProject item={promotedItem2} />
            <PromotedProject item={promotedItem3} />
        </div>
    )
}
export default PromotedProjectsBar