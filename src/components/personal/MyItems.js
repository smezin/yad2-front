import { getUserFeed } from 'actions/feed.actions';
import FeedItem from 'components/body/realestate/feed/FeedItem';
import { UserContext } from 'context/UserContext';
import React, { useContext, useEffect, useState } from 'react'

const MyItems = () => {  
  const [myItemsArr, setMyItemsArr] = useState([])
  const { user } = useContext(UserContext)
  console.log(user)
  const userId = user.id
  useEffect(() => {
    const fetchUserItems = async () => {
      const feedItems = (await getUserFeed(userId)) || [];
      console.log(feedItems)
      setMyItemsArr(feedItems)
    }
    fetchUserItems()
  }, [userId]);


  console.log(myItemsArr)
  return (
    <div className="my-items">
      {
        myItemsArr.map((item) => (
          <div>
            <FeedItem item={item} editable={true} key={item._id}/>
          </div>
        ))
      }
    </div>
  )
}
export default MyItems