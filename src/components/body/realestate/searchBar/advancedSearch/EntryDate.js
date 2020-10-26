import React, { useContext, useEffect, useState } from 'react'
import { setMinEntryDate, incAdvancedFilters } from 'actions/filters.actions'
import fetchFromResource from 'utility/fetchFromResource'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import he from 'date-fns/locale/he'
import { FiltersContext } from 'context/FiltersContext'

const EntryDate = () => {
    const { dispatch, filters } = useContext(FiltersContext)
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'date', 'localName')
    const localPlaceHolder = fetchFromResource('string', 'advancedSearch', 'date', 'localPlaceHolder')
    const [entryDate, setEntryDate] = useState(filters.search.minEntryDate || false)
    
    const handleEntryPick = (pickedDate) => {
        !entryDate && dispatch(incAdvancedFilters())
        setEntryDate(pickedDate)
        dispatch(setMinEntryDate(pickedDate))
    }
    useEffect( () => {
        setEntryDate(filters.search.minEntryDate || false)
    },[filters.numOfAdvancedFilters, filters.search.minEntryDate])
    return(
        <div className="entry-date">
            <div className="entry-date__header">
                {headerLocalName}
            </div>
            <DatePicker className="entry-date__input" minDate={new Date()} 
            selected={entryDate} onChange={date => handleEntryPick(date)} locale={he} placeholderText={localPlaceHolder} />
        </div>
    )
}
export default EntryDate