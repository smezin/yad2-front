import React, { useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { clearAdvancedFilters } from 'actions/filters'
import { FiltersContext } from 'context/FiltersContext'

const ClearAdvancedFliters = () => {
    const clearLocalName= fetchFromResource('string', 'advancedSearch', 'cleanAdvancedPicks', 'localName')
    const { dispatch } = useContext(FiltersContext)
   
    const onClick = () => dispatch(clearAdvancedFilters())

    return (
        <div className="clear-advanced-filters-button" onClick={onClick} >
            {clearLocalName}
        </div>
    )
}
export default ClearAdvancedFliters