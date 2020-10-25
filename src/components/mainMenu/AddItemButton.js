import React from 'react'
import { Link } from 'react-router-dom'
import fetchFromResource from 'utility/fetchFromResource'

const AddItemButton = () => {
    const buttonLocalText = fetchFromResource('string', 'mainMenu', 'addNewItemButton', 'text')

    return (
        <Link className="add-item-button__container" to="/personal">         
            <div className="add-item-button">
                {buttonLocalText}
            </div>      
        </Link>
       
    )
}
export default AddItemButton