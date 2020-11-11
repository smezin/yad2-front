import React from 'react'
import { Link } from 'react-router-dom'
import { heart } from 'resources/specialChars'

const SavedItemsButton = () => {    
    return (
        <Link className="saved_items-button__container" to={{pathname: "/personal", state: {tab: 'favorites'}}}>         
            <div className="saved-items-button">
              {heart}
            </div>      
        </Link>       
    )
}
export default SavedItemsButton