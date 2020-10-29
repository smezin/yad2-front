import Cookies from 'js-cookie'

export const userReducerInitialState = {    
    email: undefined,
    favoriteItems: [],
    id: undefined,
    items: [],
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
        case 'UPDATE_AUTH':
            const updatedState = {
                ...state,
                ...action.updates
            }
            Cookies.set("User", updatedState, {expires: 3})
            return updatedState
        case 'CONNECT_ITEM':
            return {
                ...state,
                items: state.items.push(action.item)
            }
        default:
            return state
    }
}
