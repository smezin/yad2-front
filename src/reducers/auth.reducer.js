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
    userReducerCurrentState = Object.assign({}, JSON.parse(user))
    userReducerCurrentState = {
        ...userReducerInitialState,
        ...userReducerCurrentState
    }
}

export const authReducer = (state = userReducerCurrentState, action) => {
    switch(action.type) {
        case 'SET_AUTH':
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
        case 'UPDATE_USER':
            const updatedState = {
                ...state,
                ...action.updates
            }
            Cookies.set("User", updatedState, {expires: 3})
            return updatedState
        case 'CONNECT_ITEM':
            let updatedItemsArr = [...state.items] || []
            updatedItemsArr.push(action.itemId)
            return {
                ...state,
                items: updatedItemsArr
            }
        default:
            return state
    }
}
