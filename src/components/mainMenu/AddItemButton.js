import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const addItemButton = () => {

    const buttonLocalText = fetchFromResource('string', 'mainMenu', 'addNewItemButton', 'text')
    const onClick = () => {
        console.log('add item button clicked')
    }

    return (
        <div className="add-item-button__container" onClick={onClick}>         
            <div className="add-item-button">
                {buttonLocalText}
            </div>      
        </div>
       
    )
}
export default addItemButton