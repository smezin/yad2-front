import React from 'react'
import RangePicker from 'components/body/common/RangePicker'
import {setMinSize, setMaxSize} from 'actions/filters'
import fetchFromResource from 'utility/fetchFromResource'


const Size = (props) => {
    const { category, toggleNumOfPicks } = props
    const headerLocalName = fetchFromResource('string', 'advancedSearch', 'size', 'localName')
    const minPlaceHolder = fetchFromResource('string', 'advancedSearch', 'size', 'fromLocalName')
    const maxPlaceHolder = fetchFromResource('string', 'advancedSearch', 'size', 'upToLocalName')
   
    const rangeSpecs = {
        headerLocalName, 
        minPlaceHolder, 
        maxPlaceHolder,
        setMin: setMinSize,
        setMax: setMaxSize,
        minFilter: 'minSize',
        maxFilter: 'maxSize',
        updateAdvancedFiltersCount: true
    }

    return (
        < div className="size-picker">
           <RangePicker category={category} rangeSpecs={rangeSpecs} toggleNumOfPicks={toggleNumOfPicks}/>
        </div>
        
    )
}
export default Size