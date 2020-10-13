import React, { useContext, useEffect, useState } from 'react' 
import fetchFromResource from 'utility/fetchFromResource'
import { FiltersContext } from 'context/FiltersContext'
import { setText } from 'actions/filters'
import { incAdvancedFilters, decAdvancedFilters } from 'actions/filters'

const Storage = () => {
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'text', 'localName')
    const { dispatch, filters } = useContext(FiltersContext)
    const [currentText, setCurrentText] = useState(filters.search.text || '')
   
    
    const handleChange = (e) => {
        updateFiltersCount(e.target.value)
        setCurrentText(e.target.value)
        
        
    }
    const updateFiltersCount = (input) => {
       // console.log(filters.search.text, ' ', currentText);
       if (input !== '' && (currentText === '' || !currentText)) {
           dispatch(incAdvancedFilters())
       } else if (input === '' && currentText !== '') {
           dispatch(decAdvancedFilters())
       }
    }
    useEffect ( () => {
        dispatch(setText(currentText))
    },[currentText, dispatch])

    return (
        <div className="advanced-search-text">
            <div className="advanced-search-text__header">
                {headerLocalName}
            </div>
            <div className="advanced-search-text__input-container">
                <input type="text" onChange={(e)=>handleChange(e)} value={currentText} className="advanced-search-text__input"
                autoComplete="off" />
            </div>
      
        </div>
    )
}
export default Storage