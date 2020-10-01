import React, { useEffect, useState } from 'react'
import fetchFromresource from 'utility/fetchFromResource'
import fetchFromResource from 'utility/fetchFromResource'

const PropertyTypeInput = () => {
    const localPlaceholder = fetchFromresource('string', 'realestateSearchBar', 'propertyType', 'localPlaceholder') 
    const allTypesObj = fetchFromResource('object', 'realestateSearchBar', 'propertyType', 'types', 'forsale')
    const expand = fetchFromResource('string', 'realestateSearchBar', 'propertyType', 'localExpandButtonText', 'expand')
    const collapse = fetchFromResource('string', 'realestateSearchBar', 'propertyType', 'localExpandButtonText', 'collapse')    
    const [isOpen, setIsOpen] = useState(false)
    const [pickedTypes, setPickedTypes] = useState(localPlaceholder)    
    const allTypes = Object.keys(allTypesObj).map((propertyType) => allTypesObj[propertyType]['localName'])
    const shortList = allTypes.slice(0,6)
    const [typesToRender, setTypeToRender] = useState(shortList)
    const [isShortList, setIsShortList] = useState(true)
    const [expandCollapseButton, setExpandCollapseButton] = useState(expand)
    const upArrow = <span>&#10094;</span>
    const downArrow = <span>&#10095;</span>


    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    const showMoreTypes = () => {
        if (isShortList) {
            setTypeToRender(allTypes)
            setExpandCollapseButton(collapse)
        } else {
            setTypeToRender(shortList)
            setExpandCollapseButton(expand)
        }
        setIsShortList(!isShortList)
    }
    return (
        <div>
            <div className="property-type__container" onClick={toggleDropdown}>
                {pickedTypes}{isOpen ? upArrow : downArrow}
            </div>
            {
                isOpen 
                &&
                <div className="property-type__dropdown">
                    {
                        typesToRender.map((propertyType) => (
                            <div className="property-type">
                                {propertyType}
                            </div>
                        ))
                    }
                    <div onClick={showMoreTypes}>{expandCollapseButton}</div>
                </div>
            }            
        </div>
    )
}

export default PropertyTypeInput