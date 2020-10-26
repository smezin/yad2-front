import React from 'react'
import RangePickerContinuous from 'components/body/common/RangePickerContinuous'
import {setMinSize, setMaxSize} from 'actions/filters.actions'
import fetchFromResource from 'utility/fetchFromResource'


const Size = (props) => {
    const { category } = props
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
           <RangePickerContinuous category={category} rangeSpecs={rangeSpecs} />
        </div>
        
    )
}
export default Size