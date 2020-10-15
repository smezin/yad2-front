import React, { useEffect } from 'react'
import { Router , Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import MainMenu from 'components/mainMenu/MainMenu'
import RealestateNavbar from 'components/navBars/RealestateNavbar'
import RealestateBody from 'components/body/realestate/RealestateBody'
import Footer from 'components/footer/Footer'

export const history = createBrowserHistory()

export const RedirectHome = () => {
    useEffect( () => {
        console.log('here')
        window.scrollTo(0, 0)
        history.push('/realestate')
    })
    return null
}

const AppRouter = () => (
    <Router history={history}>
        <MainMenu />  
        <RealestateNavbar />
        <Switch>
            <Route path="/realestate" component={RealestateBody} />
            <Route exact path="/e" component={RedirectHome} />
        </Switch>
        <Footer />
    </Router>
)

export default AppRouter