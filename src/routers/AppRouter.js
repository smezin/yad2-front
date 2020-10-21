import React from 'react'
import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainMenu from 'components/mainMenu/MainMenu'
import RealestateNavbar from 'components/navBars/RealestateNavbar'
import RealestateBody from 'components/body/realestate/RealestateBody'
import Footer from 'components/footer/Footer'
import PageNotFound from 'components/PageNotFound'
import PersonalPage from 'components/personal/PersonalPage'

export const history = createBrowserHistory()

const AppRouter = () => {
    return (
        <Router>
            <MainMenu />  
            <RealestateNavbar />
            <Switch>
                <Route path="/realestate" component={RealestateBody} />
                <Redirect from="/" to="/realestate" exact={true} />
                <Route path="/personal" component={PersonalPage} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </Router>
    )
}


export default AppRouter