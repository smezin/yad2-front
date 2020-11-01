import React, { useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { magnifyingGlass } from 'resources/specialChars'
import { UserContext } from 'context/UserContext';
const GoSearch = () => {
    const { user } = useContext(UserContext)
    const searchLocalName = fetchFromResource('string', 'realestateSearchBar', 'goSearch', 'localName')
    const onClick = () => {
        console.log(user)
    }
    return (
        <div className="go-search" onClick={onClick}>
            {magnifyingGlass}  <span className="go-search__header">{searchLocalName}</span> 
        </div>
    )
}
export default GoSearch