import React from 'react'
import LinkedText from '../../entities/LinkedText'

const NavItem = (props) => {
    const { categories } = props
    console.log(categories)
    const links = []
    for (let category in categories) {
        if (categories.hasOwnProperty(category)) {
            links.push(new LinkedText('/' + category, categories[category]['name']))
        }
    }
    console.log(links)
    return (
        <div className="nav-item">
            {
                links.map((link) => (
                    <a key={link.name} href={link.urlSuffix} className='dropdown-link main-menu-link'>{link.name}</a>
                ))
            }
        </div>
    )
}
export default NavItem