import React, { useContext } from 'react'
import Cookies from 'js-cookie'
import SignInSignOnForm from 'components/personal/SignInSignOnForm'
import { Route } from 'react-router-dom'
import { AuthContext } from 'context/AuthContext'

const PrivateRoute = ({ component, data, ...options }) => {
    const user = Cookies.get("User")
    const { auth } = useContext(AuthContext)
    const finalComponent = (user || auth.token) ? component : SignInSignOnForm
    return <Route {...options} component={finalComponent} />
}
export default PrivateRoute

