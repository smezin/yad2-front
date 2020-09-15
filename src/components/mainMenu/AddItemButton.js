import React from 'react'
import resources from '../../resources.json'

const addItemButton = () => {
    // onClick = () => {
    //     console.log('addNewItemClicked')
    //     /*
    //     check if logged in
    //     */
    // }
    return (
        <div className="add-item-button__wrapper">
            <div className="add-item-button">
                {resources.mainMenu.addNewItemButton.text}
            </div>            
        </div>
    )
}
export default addItemButton