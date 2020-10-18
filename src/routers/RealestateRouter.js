import React, { useEffect } from 'react'
import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainMenu from 'components/mainMenu/MainMenu'
import RealestateNavbar from 'components/navBars/RealestateNavbar'
import RealestateBody from 'components/body/realestate/RealestateBody'
import Footer from 'components/footer/Footer'
import PageNotFound from 'components/PageNotFound'
import PersonalPage from 'components/personal/PersonalPage'

export const history = createBrowserHistory()

const RealestateRouter = () => {
    return (
        <Router>
            <MainMenu />  
            <RealestateNavbar />
            <Switch>
                <Route path="/realestate/forsale" component={()=>(<RealestateBody category="forsale" />)} exact={true} />
                <Route path="/realestate/rent" component={()=>(<RealestateBody category="rent" />)} exact={true} />
                <Route path="/realestate/roommates" component={()=>(<RealestateBody category="roommates" />)} exact={true} />
                <Route path="/realestate/commercial" component={()=>(<RealestateBody category="commercial" />)} exact={true} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </Router>
    )
}


export default RealestateRouter