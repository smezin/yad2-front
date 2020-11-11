import { getUserFeed } from 'actions/feed.actions';
import FeedItem from 'components/body/realestate/feed/FeedItem';
import { UserContext } from 'context/UserContext';
import React, { useContext, useEffect, useState } from 'react'

const MyItems = () => {  
  const [myItemsArr, setMyItemsArr] = useState([])
  const { user } = useContext(UserContext)
  const userId = user.id
  useEffect(() => {
    let isSubscribed = true  //unsubscribe from promise to prevent memory leak/updating unmounted component
    const fetchMyItems = async () => {
      const feedItems = (await getUserFeed(userId)) || [];
      isSubscribed && setMyItemsArr(feedItems)
    }
    fetchMyItems()
    return () => isSubscribed = false
  }, [userId]);

  return (
    <div className="my-items">
      {
        myItemsArr.map((item) => (
          <div key={item._id}>
            <FeedItem item={item} editable={true} />
          </div>
        ))
      }
    </div>
  )
}
export default MyItems