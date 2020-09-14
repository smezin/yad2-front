import React from 'react'
import LinkedText from '../../entities/LinkedText'

const NavItem = (props) => {
    const { categories } = props
    console.log(categories)
    const links = []
    for (let category in categories) {
        if (categories.hasOwnProperty(category)) {
            links.push(new LinkedText('/' + category, categories[category]['localName']))
        }
    }
    console.log("links", links)
    return (        
        <div className="main-menu__items-container">    
            {links.map((link) => (
            <div className="main-menu__item-wrapper">
                <a key={link.name} href={link.urlSuffix} className='main-menu__item'>{link.name}</a>        
            </div>            
            ))}
        </div>
    )
}
export default NavItem