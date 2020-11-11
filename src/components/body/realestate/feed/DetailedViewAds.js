import { getCategoryFeed } from 'requests/feed.requests'
import PromotedProject from 'components/body/promotedProjects/PromotedProject'
import React, { useEffect, useState } from 'react'

const DetailedViewAds = () => {
  const [promotedItems, setPromotedItems] = useState([])
  useEffect(() => {
      const fetchPromotedItems = async () => {
        const promotedItemsFeed = (await getCategoryFeed('promoted')) || [];
        setPromotedItems(promotedItemsFeed)
      }
      fetchPromotedItems();
  }, [])  
  const totalItems = promotedItems.length
  const promotedItem = totalItems > 0 ? promotedItems[Math.floor(Math.random() * totalItems)] : undefined
  return (
    <div className="detailed-view-ads">
      <PromotedProject item={promotedItem}/>    
    </div>
    
  )
}
export default DetailedViewAds