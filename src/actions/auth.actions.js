
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
        let response = await fetch('http://localhost:8080/api/auth/signin', requestParams)
        if (response.status !== 200) {
            throw response.status
        } 
        response = await response.json()
        dispatch(setAuth(response))
    } catch (e) {
        console.log(e)
    }
}
export const signUp = async (username, email, password, dispatch) => {
    try {
        const requestParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password})
        }
        let response = await fetch('http://localhost:8080/api/auth/signup', requestParams)
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