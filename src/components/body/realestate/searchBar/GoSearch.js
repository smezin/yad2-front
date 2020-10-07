import React, { useContext } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import fetchFromResource from 'utility/fetchFromResource'
import { magnifyingGlass } from 'resources/specialChars'

const GoSearch = () => {
    const { filters } = useContext(FiltersContext)
    const searchLocalName = fetchFromResource('string', 'realestateSearchBar', 'goSearch', 'localName')
    const onClick = () => console.log(filters)
    return (
        <div className="go-search" onClick={onClick}>
            {magnifyingGlass}  {searchLocalName}
        </div>
    )
}
export default GoSearch