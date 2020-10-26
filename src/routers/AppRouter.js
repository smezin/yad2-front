import React from 'react'
import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainMenu from 'components/mainMenu/MainMenu'
import RealestateNavbar from 'components/navBars/RealestateNavbar'
import RealestateBody from 'components/body/realestate/RealestateBody'
import Footer from 'components/footer/Footer'
import PageNotFound from 'components/PageNotFound'
import PersonalPage from 'components/personal/PersonalPage'
import SignInSignOnForm from 'components/personal/SignInSignOnForm'
import AuthContextProvider from 'context/AuthContext'

export const history = createBrowserHistory()
const PrivateRoute = ({ component, data, ...options }) => {
    //const { user } = useAuthDataContext();
    const user = false
    const finalComponent = user ? component : SignInSignOnForm
    return <Route {...options} component={finalComponent} />
  }; 
const AppRouter = () => {
    return (
        <Router>      
        <AuthContextProvider>
            <MainMenu />  
            <RealestateNavbar />
            <Switch>
            <Redirect from="/realestate" to="/realestate/forsale" exact={true} />
                <Route path="/realestate" component={RealestateBody}/>
                <Redirect from="/" to="/realestate/forsale" exact={true} />               
                <PrivateRoute path="/personal" component={PersonalPage} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </AuthContextProvider>  
        </Router>
    )
}



export default AppRouter