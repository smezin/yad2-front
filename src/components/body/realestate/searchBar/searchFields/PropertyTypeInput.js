import React, { useEffect, useState, useContext } from 'react'
import onClickOutside from 'react-onclickoutside'
import fetchFromResource from 'utility/fetchFromResource'
import { setPropertyTypes } from 'actions/filters'
import { FiltersContext } from 'context/FiltersContext'
import { upArrow, downArrow, checkedBox, unCheckedBox } from 'resources/specialChars'

function PropertyTypeInput (props)  //must not be an arrow function for onclickoutside to work
{
    const { category } = props
    const { dispatch } = useContext(FiltersContext)
    //fetch local text from resource
    const localPlaceholder = fetchFromResource('string', 'realestateSearchBar', 'propertyType', 'localPlaceholder') 
    const allTypesObj = fetchFromResource('object', 'realestateSearchBar', 'propertyType', 'types', category)
    const expandLocalName = fetchFromResource('string', 'realestateSearchBar', 'propertyType', 'localExpandButtonText', 'expand', 'localName')
    const collapseLocalName = fetchFromResource('string', 'realestateSearchBar', 'propertyType', 'localExpandButtonText', 'collapse', 'localName')    
    const multiPickLocalName = fetchFromResource('string', 'realestateSearchBar', 'propertyType', 'localMultiplePick')
    //setup lists
    const fullList = Object.keys(allTypesObj).map((propertyType) => allTypesObj[propertyType]['localName'])
    const shortList = fullList.slice(0,7)
    //state control
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [pickedTypes, setPickedTypes] = useState([])   
    const [hasData, setHasData] = useState(false) 
    const [searchBarText, setSearchBarText] = useState(localPlaceholder)
    const [typesToRender, setTypeToRender] = useState(shortList)
    const [isShortList, setIsShortList] = useState(true)
    const [expandCollapseButton, setExpandCollapseButton] = useState(expandLocalName)
    const toggleDropdown = () => {
        if (!isDropdownOpen) {
            if (isShortList) {
                setTypeToRender(shortList)
            } else {
                setTypeToRender(fullList)
            }
        }
        setIsDropdownOpen(!isDropdownOpen)
    } 
    useEffect ( ()=> {
        setPickedTypes([])
    },[category, dispatch])

    useEffect ( () => {
        dispatch(setPropertyTypes(pickedTypes))
    },[pickedTypes, dispatch])

    const showMoreTypes = () => {
        if (isShortList) {
            setTypeToRender(fullList)
            setExpandCollapseButton(collapseLocalName)
        } else {
            setTypeToRender(shortList)
            setExpandCollapseButton(expandLocalName)
        }
        setIsShortList(!isShortList)
    }
    const addRemoveType = (propertyType) => {
        pickedTypes.includes(propertyType) ?
            setPickedTypes(pickedTypes.filter(type => type !== propertyType)) :         
            setPickedTypes([...pickedTypes, propertyType])
    }
    useEffect ( () => {
        switch(pickedTypes.length) {
            case 0:
                setHasData(false)
                return setSearchBarText(localPlaceholder)
            case 1:
                setHasData(true)
                return setSearchBarText(pickedTypes[0])
            default:
                setHasData(true)
                return setSearchBarText(multiPickLocalName + ' (' + pickedTypes.length + ')')
        }
    },[hasData, localPlaceholder, pickedTypes, multiPickLocalName])

    PropertyTypeInput.handleClickOutside = () => setIsDropdownOpen(false)

    return (
        <div className="property-type__input">
            <div className={`property-type__bar ${hasData?'has-data':''}`} onClick={toggleDropdown}>
                {searchBarText}
                {isDropdownOpen ? upArrow : downArrow}
            </div>
            {
                isDropdownOpen &&
                <div className="property-type__dropdown">
                    {
                        typesToRender.map((propertyType) => (
                            <div className={`dropdown__item${pickedTypes.includes(propertyType) ? "__picked" : ""}`} 
                            onClick={() => addRemoveType(propertyType)} key={propertyType} >
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
