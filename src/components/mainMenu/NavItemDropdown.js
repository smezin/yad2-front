import React, { useEffect, useState } from 'react'
import LinkedText from '../../entities/LinkedText'

const NavItemDropdown = (props) => {
    const { menuItems, menuName, parentRect } = props  
    const [menuWidth, setMenuWidth] = useState(parentRect.right)            //center menu to get it's true width
    
    const setMenuLocation = () => {   
        const menuVisbilityStatus = (menuWidth === parentRect.right) ? "hidden" : "visible"
        return {
            left: parentRect.right - menuWidth,
            visibility: menuVisbilityStatus
        }            
    }
    
    const links = []
    for (let menuItem in menuItems) {
        if (menuItems.hasOwnProperty(menuItem)) {
            links.push(new LinkedText(menuItems[menuItem]['path'], menuItem ,menuItems[menuItem]['localName']))
        }
    }
    
    const onClick = () => {
        console.log('dropdown menu item clicked')
    }

    useEffect ( () => {
        const menuRect = document.getElementById(`main-menu__dropdown-container-of__${menuName}`)
        menuRect ? setMenuWidth(menuRect.getBoundingClientRect().width) : setMenuWidth(0)        
    },[menuName])

    return (
        <div className="main-menu__dropdown-container" id={`main-menu__dropdown-container-of__${menuName}`} 
        style={setMenuLocation()}>
            {            
                links.map((link) => (
                    <div key={link.name} className="main-menu__dropdown-item" id={`main-menu__dropdown-item__${link.name}`}  
                    onClick={onClick}>
                        {link.localName}
                    </div>
                ))
            }
        </div>
    ) 
}

export default NavItemDropdown
