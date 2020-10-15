import React from 'react'
import { Link } from 'react-router-dom'
import fetchFromResource from 'utility/fetchFromResource'

const addItemButton = () => {

    const buttonLocalText = fetchFromResource('string', 'mainMenu', 'addNewItemButton', 'text')
    const onClick = () => {
        console.log('add item button clicked')
    }

    return (
        <Link className="add-item-button__container" onClick={onClick} to="/personal">         
            <div className="add-item-button">
                {buttonLocalText}
            </div>      
        </Link>
       
    )
}
export default addItemButton