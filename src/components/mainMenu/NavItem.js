import React, { useEffect, useState } from 'react'
import NavItemDropdownMenu from './NavItemDropdown'
import LinkedText from '../../entities/LinkedText'
import fetchFromResource from '../../utility/fetchFromResource'

const NavItem = (props) => {
    const [itemName, setItemName] = useState('')
    const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false)
    const { categories } = props
    const showDropdownMenu = () => {
        setDropdownMenuVisible(true)
    }
    const hideDropdownMenu = () => {
        setDropdownMenuVisible(false)
    }
    const links = []
    for (let category in categories) {
        if (categories.hasOwnProperty(category)) {
            links.push(new LinkedText('/' + category, categories[category]['name'] ,categories[category]['localName']))
        }
    }

    useEffect( () => {
        links.map((link) => {
            let item = document.getElementById(`main-menu__item-wrapper__${link.name}`)
            item.onmouseenter = () => {
                showDropdownMenu()
                setItemName(link)
            }
            item.onmouseleave = () => {
                hideDropdownMenu()
            }
            return null
        })  
    })
   
    return (        
        <div className="main-menu__items-container">    
            {links.map((link) => (               
                <div key={link.name}>
                    <div className="main-menu__item-wrapper" id={`main-menu__item-wrapper__${link.name}`}>
                        <a key={link.name} href={link.urlSuffix} className='main-menu__item'>{link.localName}</a>        
                    </div> 
                
                    <div className="main-menu__dropdown-menu" id={`main-menu__dropdown-menu__${link.name}`}>
                        {(dropdownMenuVisible && itemName.name===link.name) && <NavItemDropdownMenu category={fetchFromResource('mainMenu', 'dropdownMenus', link.name)}/>}
                    </div>                        
                </div>      
            ))}
        </div>
    )
}
export default NavItem






    // return (        
    //     <Nav className="main-menu__items-container">    
    //         {links.map((link) => (
    //             <Dropdown key={link.name}>
    //                 <Dropdown.Toggle variant="success" id="main-menu__dropdown-toggle">
    //                     <div className="main-menu__item-wrapper" onMouseEnter={showDropdownMenu} onMouseLeave={hideDropdownMenu}>
    //                         <a key={link.name} href={link.urlSuffix} className='main-menu__item'>{link.localName}</a>        
    //                     </div> 
    //                 </Dropdown.Toggle>
    //                 <Dropdown.Menu key={link.name}>
    //                     <NavItemDropdownMenu category={fetchFromResource('mainMenu', 'dropdownMenus', link.name)}/>
    //                 </Dropdown.Menu>                        
    //             </Dropdown>
                       
    //         ))}
    //     </Nav>
    // )

    