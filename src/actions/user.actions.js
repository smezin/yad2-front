
export const setAuth = (response) => ({
    type: 'SET_AUTH',
    response
})
export const removeAuth = () => ({
    type: 'REMOVE_AUTH'
})

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
// export const connectItemContext = (itemId) => ({
//     type: 'CONNECT_ITEM',
//     itemId
// })

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
// export const connectItem = async(user, itemId, dispatch) => {
//     try {
//         const requestParams = {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({user})
//         }
//         let response = await fetch( `${process.env.REACT_APP_DEV_SERVER_IP}/api/auth/connect`, requestParams)
//         if (response.status !== 200) {
//             throw response.status
//         }
//         response = await response.json()
//         dispatch(connectItem(response))
//     } catch (e) {
//         console.log(e)
//     }
// }