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
    
    const items = []
    
    Object.keys(menuItems).forEach((item) => {
        items.push(new LinkedText(menuItems[item]['path'], item ,menuItems[item]['localName']))
    })

    const onClick = (e, item) => {
        console.log(`dropdown menu item ${item.path} clicked`)
    }

    useEffect ( () => {
        const menuRect = document.getElementById(`main-menu__dropdown-container-of__${menuName}`)
        menuRect ? setMenuWidth(menuRect.getBoundingClientRect().width) : setMenuWidth(0)        
    },[menuName])

    return (
        <div className="main-menu__dropdown-container" id={`main-menu__dropdown-container-of__${menuName}`} 
        style={setMenuLocation()}>
            {            
                items.map((item) => (
                    <div key={item.name} className="main-menu__dropdown-item" id={`main-menu__dropdown-item__${item.name}`}  
                    onClick={(e) => onClick(e, item)}>
                        {item.localName}
                    </div>
                ))
            }
        </div>
    ) 
}

export default NavItemDropdown
