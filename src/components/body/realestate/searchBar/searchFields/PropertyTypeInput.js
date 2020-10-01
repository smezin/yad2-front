import React, { useState } from 'react'
import fetchFromresource from 'utility/fetchFromResource'

const PropertyTypeInput = () => {
    const [isOpen, setIsOpen] = useState(false)
    const localPlaceholder = fetchFromresource('realestateSearchBar', 'propertyType', 'localPlaceholder') 
    const upArrow = <span>&#10094;</span>
    const downArrow = <span>&#10095;</span>

    const onClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="property-type__container" onClick={onClick}>
           {localPlaceholder}{isOpen ? upArrow : downArrow}
        </div>
    )
}

export default PropertyTypeInput