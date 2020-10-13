import React, { useContext, useEffect, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import { incAdvancedFilters } from 'actions/filters'

const BlockPicker = (props) => {
    const { optionsObj, toggleFunc, serachFilter } = props
    const { dispatch, filters } = useContext(FiltersContext)
    const [currentPick, setCurrentPick] = useState(filters.search[serachFilter])
    
    const handlePick = (pick) => {
        !currentPick && dispatch(incAdvancedFilters())
        dispatch(toggleFunc(pick))
        setCurrentPick(pick)
    }
    useEffect( () => {
        setCurrentPick(filters.search[serachFilter])
    },[filters.search, filters.numOfAdvancedFilters, serachFilter])
  
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