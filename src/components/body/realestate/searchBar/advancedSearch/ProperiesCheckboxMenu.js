import React, { useContext, useEffect, useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext } from 'context/FiltersContext'
import { setProperties, incAdvancedFilters, decAdvancedFilters } from 'actions/filters'
import { checkedBox, unCheckedBox } from 'resources/specialChars'

const PropertiesCheckboxMenu = (props) => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'PropertiesCheckboxMenu', 'localName')
    const { category } = props
    const { dispatch, filters } = useContext(FiltersContext)
    const [pickedProperties, setPickedProperties] = useState(filters.search.properties)
    const itemsObj = fetchFromResource('object', 'advancedSearch', 'PropertiesCheckboxMenu', 'properties', category)
    const items = Object.keys(itemsObj).map((item) => itemsObj[item]['localName'])
   
    
    const addRemoveProperty = (property) => {
        if (pickedProperties.includes(property)) {
            setPickedProperties(pickedProperties.filter( (pickedProperty) => property !== pickedProperty))
            dispatch(decAdvancedFilters())
        } else {
            setPickedProperties([...pickedProperties, property])
            dispatch(incAdvancedFilters())
        }        
    }
    
   
    useEffect( () => {
        dispatch(setProperties(pickedProperties))
    },[pickedProperties, dispatch])

    useEffect( () => {
        dispatch(setProperties(filters.search.properties))
    },[dispatch, filters.search.properties])

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
export default PropertiesCheckboxMenu