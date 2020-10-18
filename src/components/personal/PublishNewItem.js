import React, { useContext, useState, useEffect } from 'react'
import { ItemContext } from 'context/ItemContext'
import './inputFields/ItemCategory'
import ItemCategory from './inputFields/ItemCategory'

const PublishNewItem = () => {
    const { item } = useContext(ItemContext)
    const [itemCategory, setItemCategory] = useState(item.properties.category)
    
    const renderFormByCategory = () => {
        switch(itemCategory) {
            case 'forsale':
                return (
                    <div>forsale</div>
                )
            case 'rent':
                return (
                    <div>rent</div>
                )
            case 'roommates':
                return (
                    <div>roommates</div>
                )
            case 'commercial':
                return (
                    <div>commercial</div>
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
            <div>{renderFormByCategory()} </div>
        </div>
    )
}
export default PublishNewItem