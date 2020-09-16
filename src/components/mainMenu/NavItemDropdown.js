import React from 'react'
import LinkedText from '../../entities/LinkedText'

const NavItemDropdown = (props) => {
    
    const { menuItems } = props
    const links = []
    
    for (let menuItem in menuItems) {
        if (menuItems.hasOwnProperty(menuItem)) {
            links.push(new LinkedText(menuItems[menuItem]['path'], menuItem ,menuItems[menuItem]['localName']))
        }
    }
    
    return (
    <div className="main-menu__nav-link__dropdown">
        {
            links.map((link) => (
                <div key={`container of ${link.name}`} className="main-menu__dropdown-link-container">
                    <a key={link.path} href={link.path} className='main-menu__dropdown-link'>{link.localName}</a>
                </div>
            ))
        }
    </div>
) 
}

export default NavItemDropdown

// for (let menuItem in menuItems) {
//     if (items.hasOwnProperty(menuItem)) {
//         links.push(new LinkedText(items[menuItem]['path'], menuItem ,items[menuItem]['localName']))
//     }
// }

// return (
//     <div className="dropdown" id={category['name']}>
//         {
//             links.map((link) => (
//                 <div key={`container of ${link.name}`} className="main-menu__dropdown-link-container">
//                     <a key={link.path} href={link.path} className='main-menu__dropdown-link'>{link.localName}</a>
//                 </div>
//             ))
//         }
//     </div>
// ) 