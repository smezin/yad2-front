
export const setAuth = (response) => ({
    type: 'SET_AUTH',
    response
})
export const SignIn = async (username, password, dispatch) => {
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
        console.log('in',response)
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
        console.log('up',response)
        dispatch(setAuth(response))
    } catch (e) {
        console.log(e)
    } 
}