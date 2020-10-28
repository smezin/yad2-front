import Cookies from 'js-cookie'

export const userReducerInitialState = {    
    email: undefined,
    favoriteItems: [],
    id: undefined,
    mobile: undefined,
    previousSearches: [],
    token: undefined,    
    username: undefined
}
let userReducerCurrentState = userReducerInitialState
const user = Cookies.get("User")

if (user) {
    console.log(JSON.parse(user))
    userReducerCurrentState = Object.assign({}, JSON.parse(user))
    userReducerCurrentState = {
        ...userReducerInitialState,
        ...userReducerCurrentState
    }
}

export const authReducer = (state = userReducerCurrentState, action) => {
    switch(action.type) {
        case 'SET_AUTH':
            console.log(action.response)
            const newState =  {
                ...state,
                id: action.response.id,
                email: action.response.email,
                mobile: action.response.mobile,
                token: action.response.token,
                username: action.response.username,
            }
            Cookies.set("User", newState, {expires: 3})
            return newState
        case 'REMOVE_AUTH':
            Cookies.remove("User")
            return {
                ...userReducerInitialState
            }
        default:
            return state
    }
}
