import React, { useContext, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'

const BlockPicker = (props) => {
    const { optionsObj, toggleFunc, serachFilter } = props
    const { dispatch, filters } = useContext(FiltersContext)
    const [currentPick, setCurrentPick] = useState(filters.search[serachFilter])
    
    const handlePick = (pick) => {
        dispatch(toggleFunc(pick))
        setCurrentPick(pick)
    }
  
    return (
        <div className="block-picker__options-container" >            
            {
                Object.keys(optionsObj).map( (option) => (
                    <div className={`block-picker__option${option === currentPick ? '__picked':''}`} 
                    onClick={()=>handlePick(option)} key={optionsObj[option]['localName']} >
                        {optionsObj[option]['localName']}
                    </div>
                )) 
            }
        </div>
    )
}
export default BlockPicker