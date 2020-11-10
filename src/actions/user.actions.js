import Cookies from 'js-cookie'

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

// export const addFavorite = (itemId) => ({
//     type: 'ADD_FAVORITE',
//     itemId
// })

export const signIn = async (username, password, dispatch) => {
    try {
        const requestParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }
        let response = await fetch( `${process.env.REACT_APP_DEV_SERVER_IP}/api/user/signin`, requestParams)
        if (response.status !== 200) {
            throw response.status
        } 
        response = await response.json()
        dispatch(setAuth(response))
    } catch (e) {
        console.log(e)
    }
}
export const signUp = async (username, email, mobile, password, dispatch) => {
    try {
        const requestParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, mobile, password})
        }
        let response = await fetch( `${process.env.REACT_APP_DEV_SERVER_IP}/api/user/signup`, requestParams)
        if (response.status !== 201 && response.status !== 200) {
            throw response.status            
        }
        response = await response.json()
        dispatch(setAuth(response))
    } catch (e) {
        console.log(e)
    } 
}
export const signAllOut = async (dispatch) => {
    dispatch(removeAuth())
}

export const updateUserContext = (updates) => ({
    type: 'UPDATE_USER',
    updates
})

export const updateUser = async(user, updates, dispatch) => {
    try {
        const requestParams = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user, updates})
        }
        let response = await fetch( `${process.env.REACT_APP_DEV_SERVER_IP}/api/user/me`, requestParams)
        if (response.status !== 200) {
            throw response.status
        }
        response = await response.json()
        dispatch(updateUserContext(response))
    } catch (e) {
        console.log(e)
    }
}
export const addItemToFavorites = async (userId, itemId, dispatch) => {
    try {
        const requestParams = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId, itemId})
        }
        let response = await fetch( `${process.env.REACT_APP_DEV_SERVER_IP}/api/user/add-favorite`, requestParams)
        if (response.status !== 200) {            
            throw response.status
        }
        response = await response.json()
        console.log('server response: ',response)
        dispatch(updateUserContext(response))    
        Cookies.set('User', response, {expires: 3}) 
    } catch (e) {
        console.log(e)
    }
}
export const removeItemFromUser = async(userId, itemId, dispatch) => {
    try {
        const requestParams = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId, itemId})
        }
        let response = await fetch( `${process.env.REACT_APP_DEV_SERVER_IP}/api/user/remove-item`, requestParams)
        if (response.status !== 200) {
            throw response.status
        }
        response = await response.json()
        dispatch(updateUserContext(response))
    } catch (e) {
        console.log(e)
    }
}
export const getCurrentUser = async (username) => {
    try {
        const requestParams = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        let response = await fetch( `${process.env.REACT_APP_DEV_SERVER_IP}/api/user/get/${username}`, requestParams)
        if (response.status !== 200) {
            throw response.status
        }
        response = await response.json()
        return response
    } catch (e) {
        console.log(e)
    }
}