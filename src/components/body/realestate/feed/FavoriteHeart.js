import React, { useState } from 'react'

const FavoriteHeart = (props) => {
    //const { favoriteItem } = props
    const [isFavorive, setIsfavorite] = useState(false)
    const heartClicked = () => setIsfavorite(!isFavorive)
    return (
        isFavorive ?
        <span role="img" aria-label="orange-heart" className="symbol__heart-full" onClick={heartClicked} >&#129505;</span>
        :<span className="symbol__heart" onClick={heartClicked}>&#9825;</span>  
    )
}
export default FavoriteHeart