import React, { useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { magnifyingGlass } from 'resources/specialChars'
import { AuthContext } from 'context/AuthContext';
const GoSearch = () => {
    const {auth} = useContext(AuthContext)
    const searchLocalName = fetchFromResource('string', 'realestateSearchBar', 'goSearch', 'localName')
    const onClick = () => {
        console.log(auth)
    }
    return (
        <div className="go-search" onClick={onClick}>
            {magnifyingGlass}  <span className="go-search__header">{searchLocalName}</span> 
        </div>
    )
}
export default GoSearch