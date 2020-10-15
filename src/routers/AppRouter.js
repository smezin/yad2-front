import React from 'react'
import { Router /*, Route, Switch */} from 'react-router-dom'
import { createBrowserHistory } from 'history'

import MainMenu from 'components/mainMenu/MainMenu'
import RealestateNavbar from 'components/navBars/RealestateNavbar'
import RealestateBody from 'components/body/realestate/RealestateBody'
import Footer from 'components/footer/Footer'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <MainMenu />  
        <RealestateNavbar />
        <RealestateBody />   
        <Footer />
    </Router>
)

export default AppRouter