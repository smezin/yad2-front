import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavItemDropdownMenu from './NavItemDropdown'
import fetchFromResource from 'utility/fetchFromResource'

const NavItem = (props) => {    
    const location = useLocation()
    const pathname = location.pathname || location.location.pathname
    const secondDelimiter = pathname.indexOf('/', pathname.indexOf('/') + 1) 
    const endOfMainCategory = secondDelimiter === -1 ? pathname.length : secondDelimiter
    const mainCategory = pathname.substring(pathname.indexOf('/') + 1, endOfMainCategory)
    const { category } = props
    const categoryItems = fetchFromResource('object', 'mainMenu', 'navItems', category)
    const [isItemHovered, setIsItemHovered] = useState(false)
    
    const showDropdownMenu = () => {
        setIsItemHovered(true)
    }
    const hideDropdownMenu = () => {
        setIsItemHovered(false)
    }
    useEffect( () => {    
    let currentLink = document.getElementById(`main-menu__nav-item__${categoryItems.name}`)
        currentLink.onmouseenter = () => {
            showDropdownMenu()
        }
        currentLink.onmouseleave = () => {
            hideDropdownMenu()
        }  
    },[categoryItems])   
    
    return (        
        <div className={`main-menu__nav-item${category === mainCategory ? '__picked':''}`} 
        id={`main-menu__nav-item__${categoryItems.name}`}>
            <div className={`main-menu__nav-item-link app-link${category === mainCategory ? '__picked':''}`}> 
                <Link to={categoryItems.path}>{categoryItems.localName}</Link>
            </div>
            { isItemHovered && <NavItemDropdownMenu menuName={categoryItems.name} menuItems={categoryItems.items}
                parentRect={document.getElementById(`main-menu__nav-item__${categoryItems.name}`).getBoundingClientRect()}    
            />}
        </div>
    )
}
   
export default NavItem    

