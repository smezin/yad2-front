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
import { addImageToItem, publishItem } from 'actions/item.actions'
import { UserContext } from 'context/UserContext'
import { updateUser } from 'actions/user.actions'
import ImageUpload from './inputFields/ImageUpload'
import AlertModal from './AlertModal'

const PublishNewItem = () => {
    const { item, dispatch: itemDispatch } = useContext(ItemContext)
    const { user, dispatch: userDispatch } = useContext(UserContext)
    const [itemCategory, setItemCategory] = useState(item.properties.category)
    const [missingFields, setMissingFields] = useState([])
    const publishButton = fetchFromResource('string', 'personal', 'publish', 'localName')
   
    const publishItemButton = async () => {      
        const itemToPublish = cleanItem(item)
        if (isMissingFields(itemToPublish)) {
            const itemId = await publishItem(itemToPublish, user.id, user.mobile, itemDispatch)        
            await updateUser(user, {items: itemId}, userDispatch) 
            addImageToItem(itemId, item.properties.images[0])
        }      
    }
    const resetMissingFields = () => {
        setMissingFields([])
    }
    const isMissingFields = (cleanedItem) => {
        const itemFields = (typeof(cleanedItem) === 'object') ? Object.keys(cleanedItem.properties) : []
        const requiredFields = ['category', 'floor', 'entryDate', 'location', 'price', 'propertyType', 'size']
        const mf = requiredFields.reduce((acc, cur) => {
            acc = itemFields.includes(cur) ? acc : [...acc, cur]
            return acc
        },[])
        setMissingFields (mf)
        return mf.length > 0
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
            {
                itemCategory !== 'roommates' &&
                <ItemPropertyType category={itemCategory} />
            }            
            <ItemProperties category={itemCategory} />
            <ImageUpload />
            <ItemText />
            <div className="custom-fields">{renderFormByCategory()} </div>
            <div className="publish-button" onClick={publishItemButton}>
                {publishButton} 
            </div>
            {
                missingFields.length > 0 &&
                <AlertModal 
                missing={missingFields.map((field) =>           
                    fetchFromResource('string', 'personal', 'missingFields', field, 'localName'))}
                resetMissingFields={resetMissingFields}
                />
            }
        </div>
    )
}
export default PublishNewItem



