import React, { useContext, useEffect, useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext } from 'context/FiltersContext'
import { toggleAvailableImmediately, incAdvancedFilters, decAdvancedFilters } from 'actions/filters.actions'
import { checkedBox, unCheckedBox } from 'resources/specialChars'

const AvailableImmediately = () => {

    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'availableImmediately', 'localName')
    const { dispatch, filters } = useContext(FiltersContext)
    const [isChecked, setIsChecked] = useState(filters.search.availableImmediately || false)

    const toggle = () => {
        setIsChecked(!isChecked) 
        isChecked ? dispatch(incAdvancedFilters()) : dispatch(decAdvancedFilters())
    }
    useEffect( () => {
        dispatch(toggleAvailableImmediately(isChecked))
    },[isChecked, dispatch])

    return (
        <div className="available-immediately" onClick={toggle} >
            <span className="available-immediately__header">{headerLocalName}</span> 
            {isChecked ? checkedBox : unCheckedBox}
        </div>
    )
}
export default AvailableImmediately