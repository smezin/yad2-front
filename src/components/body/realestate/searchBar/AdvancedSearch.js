import React, { useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import onClickOutside from 'react-onclickoutside'

function AdvancedSearch (props) 
{
    const [buttonText] = useState(fetchFromResource('string', 'realestateSearchBar', 'advancedSearch', 'localName'))
    const { parentRect } = props
    const [isDropsownOpen, setIsDropdownOpen] = useState(false)
    
    const toggleDropdown = () => setIsDropdownOpen(!isDropsownOpen)

    AdvancedSearch.handleClickOutside = () => setIsDropdownOpen(false)
    return (
        <div className="advanced-search">
            <div className="advanced-search__button" onClick={toggleDropdown}>
                <div className={`symbol-wrapper${isDropsownOpen ? '__rotate-open' : '__rotate-close'}`}> &oplus; </div> 
                <div className="button-text">{buttonText}</div> 
            </div>
            {
                isDropsownOpen && 
                <div className="advanced-search__container">

                </div>
            }
        </div>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => AdvancedSearch.handleClickOutside
}
   
export default onClickOutside(AdvancedSearch, clickOutsideConfig)
