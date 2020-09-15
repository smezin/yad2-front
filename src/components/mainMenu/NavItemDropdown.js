import React from 'react'
import LinkedText from '../../entities/LinkedText'

const NavItemDropdown = (props) => {
    
    const { category } = props
    const items = category['items']
    const links = []
    
    for (let link in items) {
        if (items.hasOwnProperty(link)) {
            links.push(new LinkedText(items[link]['path'], items[link]['localName']))
        }
    }
    
    return (
        <div className="dropdown" id={category['name']}>
            {
                links.map((link) => (
                    <div key={`container of ${link.urlSuffix}`} className="main-menu__dropdown-link-container">
                        <a key={link.urlSuffix} href={link.urlSuffix} className='main-menu__dropdown-link' id={category.name}>{link.name}</a>
                    </div>
                ))
            }
        </div>
    ) 
}

export default NavItemDropdown