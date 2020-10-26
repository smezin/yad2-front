import React, { useContext } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import { toggleRoommateGender, incAdvancedFilters, decAdvancedFilters } from 'actions/filters.actions'
import { checkedBox, unCheckedBox } from 'resources/specialChars'
import fetchFromResource from 'utility/fetchFromResource'

const RoommateGender = () => {

    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'roommateGender', 'localName')
    const maleLocalName = fetchFromResource('string', 'advancedSearch', 'roommateGender', 'options', 'male', 'localName')
    const femaleLocalName = fetchFromResource('string', 'advancedSearch', 'roommateGender', 'options', 'female', 'localName')
    const male = 'male'
    const female = 'female'
    const { dispatch, filters } = useContext(FiltersContext)
   
    const onClick = (clickedGender) => {
        if (filters.search.roommateGender.includes(clickedGender)) {
            dispatch(toggleRoommateGender(filters.search.roommateGender.filter( (gender)=> gender !== clickedGender)))
            dispatch(decAdvancedFilters())
        } else {
            dispatch(toggleRoommateGender([...filters.search.roommateGender, clickedGender]))
            dispatch(incAdvancedFilters())
        }
    } 
    
    return (
        <div className="roommate-gender">
            <div className="roommate-gender__header">
                {headerLocalName}
            </div>
            <div className="roommate-gender__options-container">
                <div className="roommate-gender__male" onClick={() => onClick(male)}>
                    <span className="roommate-gender__option">{filters.search.roommateGender.includes(male) ? checkedBox : unCheckedBox}</span>
                    <span className="roommate-gender__option__text">{maleLocalName}</span> 
                </div>
                <div className="roommate-gender__female" onClick={() => onClick(female)}>
                    <span className="roommate-gender__option">{filters.search.roommateGender.includes(female) ? checkedBox : unCheckedBox}</span> 
                    <span className="roommate-gender__option__text">{femaleLocalName}</span> 
                </div>
               
            </div>
        </div>
    )
} 
export default RoommateGender