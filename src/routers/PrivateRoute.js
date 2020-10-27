import React, { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import SignInSignOnForm from 'components/personal/SignInSignOnForm'
import { Route } from 'react-router-dom'
import { AuthContext } from 'context/AuthContext'
import { setAuth } from 'actions/auth.actions'

const PrivateRoute = ({ component, data, ...options }) => {
    const user = Cookies.get("User")
    const { dispatch } = useContext(AuthContext)
    const finalComponent = user ? component : SignInSignOnForm
    useEffect ( () => {
        user && dispatch(setAuth(JSON.parse(user)))
    },[user, dispatch])

    return <Route {...options} component={finalComponent} />
}
export default PrivateRoute

