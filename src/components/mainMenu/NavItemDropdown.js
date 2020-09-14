import React from 'react'
import LinkedText from '../../entities/LinkedText'

const NavItemDropdown = (props) => {
    const {category} = props
    console.log(category)
    const items = category['items']
    const links = []
    for (let key in items) {
        if (items.hasOwnProperty(key)) {
            links.push(new LinkedText(items[key]['path'], items[key]['localName']))
        }
    }
    console.log("name->", category['name'])
   
    return (
        <div className="dropdown" id={category['name']}>
            {
                links.map((link) => (
                    <div className="main-menu__dropdown-link-container">
                        <a key={link.name} href={link.urlSuffix} className='main-menu__dropdown-link' id={category.name}>{link.name}</a>
                    </div>
                ))
            }
        </div>
    ) 
}

export default NavItemDropdown