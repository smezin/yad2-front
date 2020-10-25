import React from 'react'
import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainMenu from 'components/mainMenu/MainMenu'
import RealestateNavbar from 'components/navBars/RealestateNavbar'
import RealestateBody from 'components/body/realestate/RealestateBody'
import Footer from 'components/footer/Footer'
import PageNotFound from 'components/PageNotFound'
import PersonalPage from 'components/personal/PersonalPage'
import SignIn from 'components/personal/SignIn'

export const history = createBrowserHistory()
const PrivateRoute = ({ component, data, ...options }) => {
    //const { user } = useAuthDataContext();
    const user = false
    const finalComponent = user ? component : SignIn
    return <Route {...options} component={finalComponent} />
  }; 
const AppRouter = () => {
    return (
        <Router>      
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
            
        </Router>
    )
}



export default AppRouter