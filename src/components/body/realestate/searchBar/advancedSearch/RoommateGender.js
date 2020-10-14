import React, { useContext, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import { toggleRoommateGender, incAdvancedFilters, decAdvancedFilters } from 'actions/filters'
import { checkedBox, unCheckedBox } from 'resources/specialChars'
import fetchFromResource from 'utility/fetchFromResource'

const RoommateGender = () => {

    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'roommateGender', 'localName')
    const maleLocalName = fetchFromResource('string', 'advancedSearch', 'roommateGender', 'options', 'male', 'localName')
    const femaleLocalName = fetchFromResource('string', 'advancedSearch', 'roommateGender', 'options', 'female', 'localName')
    const { dispatch, filters } = useContext(FiltersContext)
    const [isMale, setIsMale] = useState(false)
    const [isFemale, setIsFemale] = useState(false)
  
    const maleClick = () => setIsMale(!isMale)
    const femaleClick = () => setIsFemale(!isFemale)
    return (
        <div className="roommate-gender">
            <div className="roommate-gender__header">
                {headerLocalName}
            </div>
            <div className="roommate-gender__checkboxes">
                <span onClick={maleClick}>{maleLocalName}{isMale ? checkedBox : unCheckedBox} </span> 
                <span onClick={femaleClick}>{femaleLocalName}{isFemale ? checkedBox : unCheckedBox} </span> 
            </div>
        </div>
    )
} 
export default RoommateGender