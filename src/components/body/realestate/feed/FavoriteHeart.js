import { addItemToFavorites } from 'actions/user.actions'
import { UserContext } from 'context/UserContext'
import React, { useContext, useState } from 'react'

const FavoriteHeart = (props) => {
  const { item } = props
  const { user, dispatch } = useContext(UserContext)
  const [isFavorite, setIsfavorite] = useState(false)
  
  const heartClicked = () => {
    setIsfavorite(!isFavorite)    
    addItemToFavorites(user.id, item._id, dispatch)
  }

  return isFavorite ? 
  (<span role="img" aria-label="orange-heart" className="symbol__heart-full" onClick={heartClicked}>&#129505;</span>) : 
  (<span className="symbol__heart" onClick={heartClicked}>&#9825;</span>)
}
export default FavoriteHeart
