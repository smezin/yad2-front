import { ItemContext } from 'context/ItemContext'
import React, { useContext, useEffect, useState } from 'react'
import isNumeric from 'utility/isNumeric'
import { addSeperator, removeSeperator} from 'utility/numbersDisplay'

const NumericInput = (props) => {
    const { setNumber, formCategory } = props
    const { item, dispatch } = useContext(ItemContext)
    const [numDisplay, setNumDisplay] = useState(addSeperator(item.properties[formCategory]))

    const handleChange = (e) => {
        if (isNumeric(removeSeperator(e.target.value))) {
            setNumDisplay(addSeperator(removeSeperator(e.target.value)))
        } else {
            e.target.value=''
            setNumDisplay('')
        }
    }
    useEffect ( () => {
        if (isNumeric(removeSeperator(numDisplay))) {
            dispatch(setNumber(parseFloat(removeSeperator(numDisplay))))
        } else {
            dispatch(setNumber(undefined))
        }
        
    },[numDisplay, setNumber, dispatch])
    useEffect( () => {
        setNumDisplay(addSeperator(item.properties[formCategory]))
    },[formCategory, item.properties])
    return (
        <input className="numeric-input" type="text" onChange={(e)=>handleChange(e)} value={numDisplay} />
    )
}
export default NumericInput