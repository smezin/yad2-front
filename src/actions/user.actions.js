export const setAuth = (response) => ({
    type: 'SET_AUTH',
    response
})
export const removeAuth = () => ({
    type: 'REMOVE_AUTH'
})
export const setFavorites = (favoritesArr) => ({
    type: 'SET_FAVORITES',
    favoritesArr
})

