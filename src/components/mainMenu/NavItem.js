import React, { useEffect, useState } from 'react'
import NavItemDropdownMenu from './NavItemDropdown'
import fetchFromResource from '../../utility/fetchFromResource'

const NavItem = (props) => {    
    const { category } = props
    const categoryItems = fetchFromResource('mainMenu', 'navItems', category)
    const [isItemHovered, setIsItemHovered] = useState(false)
    const [pickedItem, setPickedItem] = useState('realestate')
    
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
    },[categoryItems])   
    
    const onClick = (e, pickedItem) => {
        setPickedItem(pickedItem)
        console.log(pickedItem.path)
    }
    return (        
        <div className={`main-menu__nav-item`} 
        id={`main-menu__nav-item__${categoryItems['name']}`}>
            <div className="main-menu__nav-item-link app-link" onClick={(e) => onClick(e, categoryItems)}> 
                {categoryItems['localName']}
            </div>
            { isItemHovered && <NavItemDropdownMenu menuName={categoryItems['name']} menuItems={categoryItems['items']}
                parentRect={document.getElementById(`main-menu__nav-item__${categoryItems['name']}`).getBoundingClientRect()}    
            />}
        </div>
    )
}
   
export default NavItem    

