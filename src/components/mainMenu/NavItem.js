import React, { useEffect, useState } from 'react'
import NavItemDropdownMenu from './NavItemDropdown'
import fetchFromResource from '../../utility/fetchFromResource'

const NavItem = (props) => {    
    const { category } = props
    const categoryItems = fetchFromResource('mainMenu', 'navItems', category)
    const [isItemHovered, setIsItemHovered] = useState(false)
    const showDropdownMenu = () => {
        setIsItemHovered(true)
    }
    const hideDropdownMenu = () => {
        setIsItemHovered(false)
    }
    useEffect( () => {    
    let currentLink = document.getElementById(`main-menu__nav-item__${categoryItems['name']}`)
        currentLink.onmouseenter = () => {
            showDropdownMenu()
        }
        currentLink.onmouseleave = () => {
            hideDropdownMenu()
        }  
    })   
    const onClick = () => {
        console.log('nav bar item clicked')
    }
    return (        
        <div className="main-menu__nav-item" id={`main-menu__nav-item__${categoryItems['name']}`}>
            <div className="main-menu__nav-item-link app-link" onClick={onClick}>
                {categoryItems['localName']}
            </div>
            { isItemHovered && <NavItemDropdownMenu menuItems={categoryItems['items']}/>}
        </div>
    )
}
   
export default NavItem    

