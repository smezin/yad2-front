import React, { useState } from 'react'

const SinglePickerDiscrete = (props) => {

    const { options, isOptionsNumeric, dispatch, setValue} = props
    const [pickedOption, setPickedOption] = useState('')
    const onChange = (e) => {
        setPickedOption(e.target.value)
        isOptionsNumeric ? dispatch(setValue(parseFloat(e.target.value))) : dispatch(setValue(e.target.value))      
    }
    return (
         <select className="single-picker-discrete" value={pickedOption} onChange={(e)=>onChange(e)} >
            {
                options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))
            }
        </select>
    )
}
export default SinglePickerDiscrete