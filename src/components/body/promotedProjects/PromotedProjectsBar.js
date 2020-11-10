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
    const totalItems = promotedItems.length
    const promotedItem1 = totalItems > 0 ? promotedItems[Math.floor(Math.random() * totalItems)] : undefined
    const promotedItem2 = totalItems > 0 ? promotedItems[Math.floor(Math.random() * totalItems)] : undefined
    const promotedItem3 = totalItems > 0 ? promotedItems[Math.floor(Math.random() * totalItems)] : undefined
    return ( 
        <div className="promoted-projects-bar">
            <PromotedProject item={promotedItem1} />
            <PromotedProject item={promotedItem2} />
            <PromotedProject item={promotedItem3} />
        </div>
    )
}
export default PromotedProjectsBar