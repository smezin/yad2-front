export const signIn = async (username, email, password) => {

}
export const signUp = async (username, email, password) => {
    console.log(username, email, password)
    try {
        const requestParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password})
        }
        let response = await fetch('http://localhost:8080/api/auth/signup', requestParams)
        
        if (response.status !== 201) {
            console.log(response)
            throw response.status            
        }
        response = await response.json()
    } catch (e) {
        console.log(e)
    } 
}