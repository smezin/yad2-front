import React, { useState, useContext } from 'react'
import { circle, circledBullet, downArrow, upArrow } from 'resources/specialChars'
import fetchFromResource from 'utility/fetchFromResource'
import onClickOutside from 'react-onclickoutside'
import { FeedContext } from 'context/FeedContext'
import { setOrder } from 'actions/feed.actions'


function SortBy ()
 {
    const headerLocalName = fetchFromResource('string', 'feedSortFilter', 'sortBy', 'headerLocalName')
    const optionsObj = fetchFromResource('object', 'feedSortFilter', 'sortBy', 'options')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [pickedOption, setPickedOption] = useState('date')
    const { dispatch } = useContext(FeedContext)

    const onClick = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }
    const onOptionPick = (option) => {
        setPickedOption(option)
        dispatch(setOrder(option))
    }
    SortBy.handleClickOutside = () => setIsDropdownOpen(false)
    return (
        <div className="sort-by">
            <div className="sort-by__header">
                {headerLocalName}
            </div>
            <div className="sort-by__input">
                <div className="sort-by__bar" onClick={onClick}>
                    {optionsObj[pickedOption]['localName']} {isDropdownOpen ? upArrow : downArrow}
                </div>
                {isDropdownOpen &&
                <div className="sort-by__dropdown">
                    {
                        Object.keys(optionsObj).map((option) => (
                            <div className={`sort-by__dropdown-item${pickedOption === option ? '__picked':''}`} 
                            onClick={()=>onOptionPick(option)} key={option}>
                                {pickedOption === option ? circledBullet:circle} {optionsObj[option]['localName']} 
                            </div>
                        ))
                    }
                </div>
                }
            </div>
        </div>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => SortBy.handleClickOutside
}
export default onClickOutside(SortBy, clickOutsideConfig)
