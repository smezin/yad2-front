import React, { useState, useEffect, useContext } from 'react'
import onClickOutside from 'react-onclickoutside'
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext } from 'context/FiltersContext'
import { upArrow, downArrow, checkedBox, unCheckedBox } from 'resources/specialChars'
import { setDealTypes, clearSearch} from 'actions/filters.actions'

function DealTypeInput (props) 
{
    const { dispatch } = useContext(FiltersContext)
    const { category } = props
    const placeholderLocalName = fetchFromResource('string', 'realestateSearchBar', 'dealType', 'placeholderLocalName')
    const multiPickLocalName = fetchFromResource('string', 'realestateSearchBar', 'dealType', 'multiPickLocalName')
    const dealTypesObj = fetchFromResource('object', 'realestateSearchBar', 'dealType', 'types')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [searchBarText, setSearchBarText] = useState(placeholderLocalName)
    const [pickedTypes, setPickedTypes] = useState([])
    const [hasData, setHasData] = useState(false)
   
    const dealTypes = Object.keys(dealTypesObj).map((dealType) => dealTypesObj[dealType]['localName'])

    const addRemoveType = (dealType) => {
        pickedTypes.includes(dealType) ?
            setPickedTypes(pickedTypes.filter((type => type !== dealType))) :         
            setPickedTypes([...pickedTypes, dealType])
    }

    useEffect ( () => {
        dispatch(setDealTypes(pickedTypes))
    },[pickedTypes, dispatch])

    useEffect ( () => {
        switch(pickedTypes.length) {
            case 0:
                setHasData(false)
                return setSearchBarText(placeholderLocalName)
            case 1:
                setHasData(true)
                return setSearchBarText(pickedTypes[0])
            default:
                setHasData(true)
                return setSearchBarText(multiPickLocalName + ' (' + pickedTypes.length + ')')
        }
    },[hasData, placeholderLocalName, pickedTypes, multiPickLocalName])

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
    useEffect ( ()=> {
        setPickedTypes([])
        dispatch(clearSearch())
    },[category, dispatch])

    DealTypeInput.handleClickOutside = () => setIsDropdownOpen(false)

    return (
        <div className="deal-type__input">
            <div className="deal-type__bar" onClick={toggleDropdown}>
                {searchBarText} {isDropdownOpen ? upArrow : downArrow}
            </div>
            {
                isDropdownOpen && 
                <div className="deal-type__dropdown">
                {
                    dealTypes.map((dealType) => (
                        <div className={`dropdown__item${pickedTypes.includes(dealType) ? "__picked" : ""}`} 
                        onClick={() => addRemoveType(dealType)} key={dealType} >
                            {pickedTypes.includes(dealType) ? checkedBox : unCheckedBox}{dealType}
                        </div>
                    ))
                }
                </div>
            }
        </div>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => DealTypeInput.handleClickOutside
}
   
export default onClickOutside(DealTypeInput, clickOutsideConfig)
