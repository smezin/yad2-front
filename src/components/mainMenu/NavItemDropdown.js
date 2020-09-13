import React from 'react'
import LinkedText from '../../entities/LinkedText'

const NavItemDropdown = (props) => {
    const {items} = props
    const links = []
    for (let key in items) {
        if (items.hasOwnProperty(key)) {
            links.push(new LinkedText('/' + key, items[key]))
        }
    }
    console.log(links)
    return (
        <div className="dropdown">
            {
                links.map((link) => (
                    <a key={link.name} href={link.urlSuffix} className='dropdown-link'>{link.name}</a>
                ))
            }
        </div>
    ) 
}

export default NavItemDropdown