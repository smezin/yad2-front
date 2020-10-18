import React, { useState } from 'react'
import ItemContext from 'context/ItemContext'
import fetchFromResource from 'utility/fetchFromResource'
import './inputFields/ItemCategory'
import ItemCategory from './inputFields/ItemCategory'


const PublishNewItem = () => {
 
    return(
        <div className="add-item-form">
            <ItemCategory />
        </div>
    )
}
export default PublishNewItem