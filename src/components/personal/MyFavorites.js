import { getItemById } from 'actions/item.actions';
import FeedItem from 'components/body/realestate/feed/FeedItem';
import { UserContext } from 'context/UserContext';
import React, { useContext, useEffect, useState } from 'react'

const MyFavorites = () => {  
  const [favoriteItemsArr, setFavoriteItemsArr] = useState([])
  const { user } = useContext(UserContext)
  const favoriteItemsIds = user.favoriteItems
  console.log(favoriteItemsIds[0])
  useEffect(() => {
    let isSubscribed = true  //unsubscribe from promise to prevent memory leak/updating unmounted component
    const fetchUserItems = async () => {
      const itemsArr = await Promise.all(favoriteItemsIds.map( (itemId) => getItemById(itemId))) 
      isSubscribed && setFavoriteItemsArr(itemsArr)
    }
    fetchUserItems()
    return () => isSubscribed = false
  }, [favoriteItemsIds]);

  return (
    <div className="my-items">
      {
        favoriteItemsArr.map((item) => (
          <div key={item._id}>
            <FeedItem item={item} />
          </div>
        ))
      }
    </div>
  )
}
export default MyFavorites