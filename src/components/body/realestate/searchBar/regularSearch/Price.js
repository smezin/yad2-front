import React from 'react'
import RangePickerContinuous from 'components/body/common/RangePickerContinuous'
import {setMinPrice, setMaxPrice} from 'actions/filters'
import fetchFromResource from 'utility/fetchFromResource'

const Price = (props) => {
    const { category } = props
    const headerLocalName = fetchFromResource('string', 'realestateSearchBar', 'price', 'localName')
    const minPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'price', 'minPriceLocalName')
    const maxPlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'price', 'maxPriceLocalName')
   
    const rangeSpecs = {
        headerLocalName, 
        minPlaceHolder, 
        maxPlaceHolder,
        setMin: setMinPrice,
        setMax: setMaxPrice,
        updateAdvancedFiltersCount: false
    }

    return (
        < div className="price">
           <RangePickerContinuous category={category} rangeSpecs={rangeSpecs} />
        </div>
        
    )
}
export default Price