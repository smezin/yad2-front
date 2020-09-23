import React from 'react'
import AddItemButton from './AddItemButton'
import NavItem from '../../components/mainMenu/NavItem'
import fetchFromResource from '../../utility/fetchFromResource'
import LinkedText from '../../entities/LinkedText'

const mainMenu = () => {
    const logo = require('../../images/yad2Logo.png')
    const navItems = fetchFromResource('mainMenu', 'navItems')
    const navLinks = []
    Object.keys(navItems).forEach( (navItem) => {
        if (navItems.hasOwnProperty(navItem)) {
            navLinks.push(new LinkedText(navItems[navItem]['path'], navItems[navItem]['name'], navItems[navItem]['localName']))
        }
    })
    
    const onClick = () => {
        console.log('logo clicked')
    }
    return (
        <div className="main-menu">
            <div className="main-menu__right-segment">
                <div className="main-menu__logo-container" onClick={onClick}>
                    <div className="main-menu__logo">
                            <img src={logo} alt="logo"/>         
                    </div>
                </div>
                <div className="main-menu__nav-items-container">
                    {
                       navLinks.map((navLink)=> (
                            <NavItem category={navLink['name']} key={navLink['name']}/>
                       ))
                    }       
                </div>
            </div>
            <div className="main-menu__left-segment">
                <AddItemButton />      
            </div>                  
        </div>

    )
}
export default mainMenu

//<NavItem category={fetchFromResource('mainMenu', 'dropdownMenus', 'realestate')}/>