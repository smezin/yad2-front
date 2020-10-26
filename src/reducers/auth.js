import Cookies from 'js-cookie'

export const userReducerInitialState = {
    username: undefined,
    email: undefined,
    token: undefined,
    id: undefined
}

const auth = Cookies.get("Authorization")
if (auth) {
    userReducerInitialState.token = auth.replace('Bearer ','')
}

export const authReducer = (state = userReducerInitialState, action) => {
    switch(action.type) {
        case 'SET_AUTH':
            Cookies.set("Authorization", `Bearer ${action.response.token}`, {expires: 3})
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
