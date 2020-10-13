import React, { useContext } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import fetchFromResource from 'utility/fetchFromResource'

const AdvancedSearchButton = () => {
    const { filters } = useContext(FiltersContext)
    const searchLocalName = fetchFromResource('string', 'advancedSearch', 'advancedSearchButton', 'localName')
    const onClick = () => console.log(filters)
    return (
        <div className="advanced-search-button" onClick={onClick}>
           {searchLocalName}
        </div>
    )
}
export default AdvancedSearchButton