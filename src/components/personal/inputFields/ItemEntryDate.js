import React, { useContext, useEffect, useState } from 'react'
import { setEntryDate } from 'actions/item'
import fetchFromResource from 'utility/fetchFromResource'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import he from 'date-fns/locale/he'
import { ItemContext } from 'context/ItemContext'

const ItemEntryDate = () => {
    const { dispatch, item } = useContext(ItemContext)
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'date', 'localName')
    const localPlaceHolder = fetchFromResource('string', 'advancedSearch', 'date', 'localPlaceHolder')
    const [itemEntryDate, setItemEntryDate] = useState(item.properties.entryDate || false)
    
    const handleEntryPick = (pickedDate) => {
        setItemEntryDate(pickedDate)
        dispatch(setEntryDate(pickedDate))
    }
    useEffect( () => {
        setItemEntryDate(item.properties.entryDate || false)
    },[item.properties.entryDate])
    return(
        <div className="item-entry-date">
            <div className="item-entry-date__header">
                {headerLocalName}
            </div>
            <DatePicker className="item-entry-date__input" minDate={new Date()} 
            selected={itemEntryDate} onChange={date => handleEntryPick(date)} locale={he} placeholderText={localPlaceHolder} />
        </div>
    )
}
export default ItemEntryDate