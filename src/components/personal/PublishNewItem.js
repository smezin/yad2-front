import React, { useContext, useState, useEffect } from 'react'
import { ItemContext } from 'context/ItemContext'
import './inputFields/ItemCategory'
import ItemCategory from './inputFields/ItemCategory'
import ItemEntryDate from './inputFields/ItemEntryDate'
import ItemFloor from './inputFields/ItemFloor'
import ItemLocation from './inputFields/ItemLocation'
import ItemPrice from './inputFields/ItemPrice'
import ItemRooms from './inputFields/ItemRooms'
import ItemSize from './inputFields/ItemSize'

const PublishNewItem = () => {
    const { item } = useContext(ItemContext)
    const [itemCategory, setItemCategory] = useState(item.properties.category)
    
    const renderFormByCategory = () => {
        switch(itemCategory) {
            case 'forsale':
                return (
                    <div>forsale custom fields</div>
                )
            case 'rent':
                return (
                    <div>rent custom fields</div>
                )
            case 'roommates':
                return (
                    <div>roommates custom fields</div>
                )
            case 'commercial':
                return (
                    <div>commercial custom fields</div>
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
            <div className="custom-fields">{renderFormByCategory()} </div>
        </div>
    )
}
export default PublishNewItem