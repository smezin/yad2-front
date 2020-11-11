import React, { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import AddItemButton from './AddItemButton'
import SavedItemsButton from './SavedItemsButton'
import NavItem from 'components/mainMenu/NavItem'
import fetchFromResource from 'utility/fetchFromResource'
import LinkedText from 'entities/LinkedText'
import { UserContext } from 'context/UserContext'
import { setAuth } from 'actions/user.actions'
import { yad2logo } from 'images'
import { useHistory } from 'react-router-dom'
import PersonalZoneButton from './PersonalZoneButton'
import NotificationButton from './NotificationButton'

const MainMenu = () => {
    const history = useHistory()
    const { dispatch } = useContext(UserContext)
    const user = Cookies.get("User") 
    const navItems = fetchFromResource('object', 'mainMenu', 'navItems')
    const navLinks = Object.keys(navItems).map( (navItem) => {
        return new LinkedText(navItems[navItem]['path'], navItems[navItem]['name'], navItems[navItem]['localName'])
    }) 
    const onLogoClick = () => {
        history.push("/realestate/forsale")
    }
    useEffect (()=> {
        user && dispatch(setAuth(JSON.parse(user)))
    },[user, dispatch])
   
    return (
        <div className="main-menu">
            <div className="main-menu__right-segment">
                <div className="main-menu__logo-container" onClick={onLogoClick}>
                    <div className="main-menu__logo">
                            <img src={yad2logo.imgSrc} alt={yad2logo.alt}/>         
                    </div>
                </div>
                <div className="main-menu__nav-items-container">
                    {
                       navLinks.map((navLink)=> (
                            <NavItem category={navLink.name} key={navLink.name}/>
                       ))
                    }       
                </div>
            </div>
            <div className="main-menu__left-segment">
                <AddItemButton />     
                <PersonalZoneButton /> 
                <SavedItemsButton />
                <NotificationButton />
            </div>                  
        </div>

    )
}
export default MainMenu

//<NavItem category={fetchFromResource('mainMenu', 'dropdownMenus', 'realestate')}/>