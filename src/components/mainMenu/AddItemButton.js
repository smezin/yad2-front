import React from 'react'
import resources from '../../resources.json'

const addItemButton = () => {

    const onClick = () => {
        console.log('add item button clicked')
    }

    return (
        <div className="add-item-button__container" onClick={onClick}>         
            <div className="add-item-button">
                {resources.mainMenu.addNewItemButton.text}
            </div>      
        </div>
       
    )
}
export default addItemButton