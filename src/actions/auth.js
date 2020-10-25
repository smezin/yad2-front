export const signIn = async (email, password) => {

}
export const signUp = async (email, password) => {
    try {
        const requestParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }
        let response = await fetch('/api/auth/signup', requestParams)
        console.log(response)
        if (response.status !== 201) {
            throw response.status
        }
        response = await response.json()
    } catch (e) {
        console.log(e)
    }
    
}