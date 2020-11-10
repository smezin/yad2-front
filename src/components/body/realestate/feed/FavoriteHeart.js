import { addItemToFavorites, getIsFavorite } from 'actions/user.actions'
import { UserContext } from 'context/UserContext'
import React, { useContext, useEffect, useState } from 'react'

const FavoriteHeart = (props) => {
  const { item } = props
  const { user, dispatch } = useContext(UserContext)
  const [isFavorite, setIsfavorite] = useState(false)
  const [prevIsFavorite, setPrevIsFavorite] = useState(false)
  const [favItems, setFavItems] = useState(user.favoriteItems)
  
  const heartClicked = () => {
    setPrevIsFavorite(isFavorite)
    setIsfavorite(!isFavorite)    
  }
  useEffect ( () => {
    setFavItems(user.favoriteItems)
  },[user.favoriteItems, isFavorite])


  useEffect(() => {
    if (item && isFavorite !== prevIsFavorite) {
      addItemToFavorites(user.id, item._id, dispatch)
    } 
  },[isFavorite, prevIsFavorite, user.id, item, dispatch])

  return (isFavorite || (item && favItems.includes(item._id))) ? 
  (<span role="img" aria-label="orange-heart" className="symbol__heart-full" onClick={heartClicked}>&#129505;</span>) : 
  (<span className="symbol__heart" onClick={heartClicked}>&#9825;</span>)
}
export default FavoriteHeart
