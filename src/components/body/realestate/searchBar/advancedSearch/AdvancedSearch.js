import React, { useContext, useEffect, useState } from 'react'
import onClickOutside from 'react-onclickoutside'
import fetchFromResource from 'utility/fetchFromResource'
import ProperiesCheckboxMenu from './PropertiesCheckboxMenu'
import AdvancedSearchRow from './AdvancedSearchRow'
import { FiltersContext } from 'context/FiltersContext'

function AdvancedSearch (props) 
{
    const { filters } = useContext(FiltersContext)
    const [buttonText] = useState(fetchFromResource('string', 'realestateSearchBar', 'advancedSearch', 'localName'))
    const { parentRect, category } = props
    const width = parentRect ? parentRect.width : 0
    const left = parentRect ? parentRect.left : 0
    const [isDropsownOpen, setIsDropdownOpen] = useState(false)
    const [myPosition, setMyposition] = useState(0)
    const [circleStyle, setCircleStyle] = useState({})
    
    const getRect = () => {
        const rect = document.getElementById('advanced-search__button').getBoundingClientRect()
        setMyposition(rect ? rect : 0)
    }
 
    const toggleDropdown = () => {
        !isDropsownOpen && getRect()
        setIsDropdownOpen(!isDropsownOpen)
    }
    const dropdownStyle = {
        width,
        left
    }
    useEffect( () => {
        setCircleStyle( {
        left: myPosition.width / 2 - 11,
        top:  -myPosition.height / 2 + 7
        })
    },[myPosition])

    AdvancedSearch.handleClickOutside = () => setIsDropdownOpen(false)
    return (
        <div className="advanced-search" >
            <div className="advanced-search__button" id="advanced-search__button" onClick={toggleDropdown}>
                <div className={`symbol-wrapper${isDropsownOpen ? '__rotate-open' : '__rotate-close'}`}> &oplus; </div> 
                <div className="button-text">{buttonText}</div> 
                <div className="num-of-picked-filters__wrapper">
                    {
                        filters.numOfAdvancedFilters > 0 &&
                        <div className="num-of-picked-filters">({filters.numOfAdvancedFilters})</div>
                    }
                </div>
                <div className="circle__wrapper" >
                    {
                        filters.numOfAdvancedFilters > 0 &&
                        <span className="circle" style={circleStyle}></span>
                    }
                </div>

            </div>
            {
                isDropsownOpen && 
                <div className="advanced-search__container" style={dropdownStyle}>
                    <ProperiesCheckboxMenu category={category} />
                    <AdvancedSearchRow category={category} setIsDropdownOpen={setIsDropdownOpen} />
                </div>
            }
        </div>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => AdvancedSearch.handleClickOutside
}
   
export default onClickOutside(AdvancedSearch, clickOutsideConfig)
