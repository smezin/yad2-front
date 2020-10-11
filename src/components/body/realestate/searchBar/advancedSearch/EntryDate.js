import React, { useContext, useState } from 'react'
import { setMinEntryDate } from 'actions/filters'
import fetchFromResource from 'utility/fetchFromResource'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import he from 'date-fns/locale/he'
import { FiltersContext } from 'context/FiltersContext'

const EntryDate = () => {
    const { dispatch } = useContext(FiltersContext)
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'date', 'localName')
    const localPlaceHolder = fetchFromResource('string', 'advancedSearch', 'date', 'localPlaceHolder')
    const [entryDate, setEntryDate] = useState(false)
    
    const handleEntryPick = (pickedDate) => {
        setEntryDate(pickedDate)
        dispatch(setMinEntryDate(pickedDate))
    }
   
    
    return(
        <div className="entry-date">
            <div className="entry-date__header">
                {headerLocalName}
            </div>
            <DatePicker className="entry-date__input" maxDate={entryDate} 
            selected={entryDate} onChange={date => handleEntryPick(date)} locale={he} />
        </div>
    )
}
export default EntryDate