import { getUserFeed } from 'actions/feed.actions';
import FeedItem from 'components/body/realestate/feed/FeedItem';
import { UserContext } from 'context/UserContext';
import React, { useContext, useEffect, useState } from 'react'

const MyItems = () => {  
  const [myItemsArr, setMyItemsArr] = useState([])
  const { user } = useContext(UserContext)
  const userId = user.id
  useEffect(() => {
    const fetchUserItems = async () => {
      const feedItems = (await getUserFeed(userId)) || [];
      setMyItemsArr(feedItems)
    }
    fetchUserItems()
  }, [userId, myItemsArr]);

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