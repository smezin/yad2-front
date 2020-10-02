import React, { useState } from 'react'
import onClickOutside from 'react-onclickoutside'
import fetchFromResource from 'utility/fetchFromResource'

function PropertyTypeInput ()  //must not be arrow fumction for onclickoutside to work
{
    const localPlaceholder = fetchFromResource('string', 'realestateSearchBar', 'propertyType', 'localPlaceholder') 
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
    const checkedBox = <span>&#9745;</span>
    const unCheckedBox = <span>&#9744;</span>

    const toggle = () => setIsOpen(!isOpen)

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
    const addRemoveType = (propertyType) => {
        if (pickedTypes === localPlaceholder) {
            setPickedTypes([propertyType])
        } else {
            if (pickedTypes.includes(propertyType)) {
                setPickedTypes(pickedTypes.filter((type => type !== propertyType)))
            } else {
                setPickedTypes([...pickedTypes, propertyType])
            }
        }
    }
    PropertyTypeInput.handleClickOutside = () => setIsOpen(false)
    console.log('picked:', pickedTypes)
    return (
        <div className="property-type__container">
            <div className="property-type__bar" onClick={toggle}>
                {pickedTypes}{isOpen ? upArrow : downArrow}
            </div>
            {
                isOpen 
                &&
                <div className="property-type__dropdown">
                    {
                        typesToRender.map((propertyType) => (
                            <div className={`property-type__item${pickedTypes.includes(propertyType) ? "__picked" : ""}`} key={propertyType} 
                            onClick={() => addRemoveType(propertyType)}>
                                {pickedTypes.includes(propertyType) ? checkedBox : unCheckedBox}{propertyType}
                            </div>
                        ))
                    }
                    <div className="expand-collapse-button" onClick={showMoreTypes}>{expandCollapseButton}</div>
                </div>
            }            
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => PropertyTypeInput.handleClickOutside
  }
   
export default onClickOutside(PropertyTypeInput, clickOutsideConfig)
