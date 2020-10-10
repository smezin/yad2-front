import React from 'react'
import RangePicker from 'components/body/common/RangePicker'
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
        setMax: setMaxPrice
    }

    return (
        < div className="price">
           <RangePicker category={category} rangeSpecs={rangeSpecs} />
        </div>
        
    )
}
export default Price