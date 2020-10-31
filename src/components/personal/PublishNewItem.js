import React, { useContext, useState, useEffect } from 'react'
import { ItemContext } from 'context/ItemContext'
import ItemCategory from './inputFields/ItemCategory'
import ItemEntryDate from './inputFields/ItemEntryDate'
import ItemFloor from './inputFields/ItemFloor'
import ItemLocation from './inputFields/ItemLocation'
import ItemPrice from './inputFields/ItemPrice'
import ItemRooms from './inputFields/ItemRooms'
import ItemSize from './inputFields/ItemSize'
import ItemProperties from './inputFields/ItemProperties'
import ItemText from './inputFields/ItemText'
import ItemPropertyType from './inputFields/ItemPropertyType'
import fetchFromResource from 'utility/fetchFromResource'
import cleanItem from 'utility/cleanItem'
import { publishItem } from 'actions/item.actions'
import { AuthContext } from 'context/AuthContext'
import { updateUser } from 'actions/auth.actions'

const PublishNewItem = () => {
    const { item, dispatch: itemDispatch } = useContext(ItemContext)
    const { auth, dispatch: authDispatch } = useContext(AuthContext)
    const [itemCategory, setItemCategory] = useState(item.properties.category)
    const publishButton = fetchFromResource('string', 'personal', 'publish', 'localName')
    
    const publishItemButton = async () => {
        const itemToPublish = cleanItem(item)
        const itemId = await publishItem(itemToPublish, auth.id, auth.mobile, itemDispatch)  
        updateUser(auth, {items: itemId} ,authDispatch) 
    }
    
    const renderFormByCategory = () => {
        switch(itemCategory) {
            case 'forsale':
                return (
                    <React.Fragment>
                         
                    </React.Fragment>
                )
            case 'rent':
                return (
                    <React.Fragment>
                         
                    </React.Fragment>
                )
            case 'roommates':
                return (
                    <React.Fragment>
                         
                    </React.Fragment>
                )
            case 'commercial':
                return (
                    <React.Fragment>
                         
                    </React.Fragment>
                )
            default:
                return
        }
    }
    useEffect ( () => {
        setItemCategory(item.properties.category)
    },[item.properties.category])
    
    return(
        <div className="add-item-form">
            <ItemCategory />
            <ItemLocation />
            <ItemPrice />
            <ItemSize />
            <ItemEntryDate />
            <ItemFloor />
            <ItemRooms />
            <ItemPropertyType category={itemCategory} />
            <ItemProperties category={itemCategory} />
            <ItemText />
            {/* <div className="custom-fields">{renderFormByCategory()} </div> */}
            <div className="publish-button" onClick={publishItemButton}>
                {publishButton}
            </div>
        </div>
    )
}
export default PublishNewItem



