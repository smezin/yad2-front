import React from 'react'
import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { createBrowserHistory } from 'history'
import MainMenu from 'components/mainMenu/MainMenu'
import RealestateNavbar from 'components/navBars/RealestateNavbar'
import RealestateBody from 'components/body/realestate/RealestateBody'
import Footer from 'components/footer/Footer'
import PageNotFound from 'components/PageNotFound'
import PersonalPage from 'components/personal/PersonalPage'
import UserContextProvider from 'context/UserContext'

export const history = createBrowserHistory()

const AppRouter = () => {

    return (
        <Router>      
        <UserContextProvider>
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
        </UserContextProvider>  
        </Router>
    )
}



export default AppRouter