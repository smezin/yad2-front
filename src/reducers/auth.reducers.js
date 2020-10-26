import Cookies from 'js-cookie'
export const userReducerInitialState = {    
    email: undefined,
    favoriteItems: [],
    id: undefined,
    previousSearches: [],
    token: undefined,    
    username: undefined
}
let userReducerCurrentState = userReducerInitialState
const user = Cookies.get("User")

if (user) {
    console.log(JSON.parse(user))
    userReducerCurrentState = Object.assign({}, JSON.parse(user))
}

export const authReducer = (state = userReducerCurrentState, action) => {
    switch(action.type) {
        case 'SET_AUTH':
            Cookies.set("User", action.response, {expires: 3})
            return {
                ...state,
                id: action.response.id,
                email: action.response.email,
                username: action.response.username,
                token: action.response.token
            }
        default:
            return state
    }
}
