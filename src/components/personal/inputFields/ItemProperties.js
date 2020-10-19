import React, { useContext, useEffect, useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { setProperties } from 'actions/item'
import { checkedBox, unCheckedBox } from 'resources/specialChars'
import { ItemContext } from 'context/ItemContext'

const ItemProperties = (props) => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'PropertiesCheckboxMenu', 'localName')
    const { category } = props
    const { dispatch, item } = useContext(ItemContext)
    const [pickedProperties, setPickedProperties] = useState(item.properties.properties)
    const itemsObj = fetchFromResource('object', 'advancedSearch', 'PropertiesCheckboxMenu', 'properties', category)
    const items = Object.keys(itemsObj).map((item) => itemsObj[item]['localName'])
   
    const addRemoveProperty = (property) => {
        if (pickedProperties.includes(property)) {
            setPickedProperties(pickedProperties.filter( (pickedProperty) => property !== pickedProperty))
        } else {
            setPickedProperties([...pickedProperties, property])
        }        
    }
    
    useEffect( () => {
        dispatch(setProperties(pickedProperties))
    },[pickedProperties, dispatch])

    useEffect( () => {
        dispatch(setProperties(item.properties.properties))
    },[dispatch, item.properties.properties])

    useEffect( () => {
        setPickedProperties(item.properties.properties)
    },[item.properties.properties])

    return (
        <div className="properties-checkbox-menu">
            <div className="properties-checkbox-menu__header">
                {headerLocalName}
            </div>
            <div className="properties-checkbox-menu__items-container">
                {
                    items.map( (item) => 
                        <div className={`properties-checkbox-menu__item${pickedProperties.includes(item) ? '__picked': ''}`}
                        onClick={() => addRemoveProperty(item)} key={item}>
                           {pickedProperties.includes(item) ? checkedBox : unCheckedBox} <span className="item-wrapper">{item}</span>
                        </div>
                    )
                }
            </div>
        </div> 
    )
}
export default ItemProperties