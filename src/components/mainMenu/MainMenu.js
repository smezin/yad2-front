import React from 'react'
import AddItemButton from './AddItemButton'
import NavItem from '../../components/mainMenu/NavItem'
import fetchFromResource from '../../utility/fetchFromResource'
const mainMenu = () => {
    return (
        <div className="main-menu">
            <AddItemButton />
            <NavItem categories={fetchFromResource('mainMenu', 'dropdownMenus')}/>
        </div>
    )
}
export default mainMenu