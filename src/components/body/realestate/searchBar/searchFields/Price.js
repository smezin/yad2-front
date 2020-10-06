import React, { useContext, useEffect, useState } from 'react'
import { FiltersContext } from 'context/FiltersContext'
import {setMinPrice, setMaxPrice} from 'actions/filters'
import fetchFromResource from 'utility/fetchFromResource'
import isNumeric from 'utility/isNumeric'
import { addSeperator, removeSeperator} from 'utility/numbersDisplay'

const Price = (props) => {
    const { category } = props
    const { dispatch } = useContext(FiltersContext)
    const headerLocalName = fetchFromResource('string', 'realestateSearchBar', 'price', 'localName')
    const minPricePlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'price', 'minPriceLocalName')
    const maxPricePlaceHolder = fetchFromResource('string', 'realestateSearchBar', 'price', 'maxPriceLocalName')
    const [minPriceDisplay, setMinPriceDisplay] = useState(minPricePlaceHolder)
    const [maxPriceDisplay, setMaxPriceDisplay] = useState(maxPricePlaceHolder)
    
    const onBlur = (e, set) => {
        if (e.target.value === '') {
            switch(set) {
                case 'min':
                    return setMinPriceDisplay(minPricePlaceHolder)
                case 'max':
                    return setMaxPriceDisplay(maxPricePlaceHolder)
                default: 
                    return
            } 
        }
    }
    const handleChange = (e, set) => {
        if (isNumeric(removeSeperator(e.target.value))) {
            switch(set) {
                case 'min':
                    return setMinPriceDisplay(addSeperator(removeSeperator(e.target.value)))
                case 'max':
                    return setMaxPriceDisplay(addSeperator(removeSeperator(e.target.value)))
                default:
                    return
            }
        } else {
            e.target.value=''
            switch(set) {
                case 'min':
                    return setMinPriceDisplay('')
                case 'max':
                    return setMaxPriceDisplay('')
                default:
                    return
            }   
        }
    }

    const clearPlaceHolder = (e, set) => {
        if (e.target.value === minPricePlaceHolder || e.target.value === maxPricePlaceHolder) {
            e.target.value = ''
            switch(set) {
                case 'min':
                    return setMinPriceDisplay('')
                case 'max':
                    return setMaxPriceDisplay('')
                default:
                    return
            }
        }
    }
    useEffect( () => {
        isNumeric(removeSeperator(minPriceDisplay)) ? dispatch(setMinPrice(parseFloat(removeSeperator(minPriceDisplay)))) 
        : dispatch(setMinPrice(undefined))
    },[minPriceDisplay, dispatch])
    useEffect( () => {
        isNumeric(removeSeperator(maxPriceDisplay)) ? dispatch(setMaxPrice(parseFloat(removeSeperator(maxPriceDisplay)))) 
        : dispatch(setMaxPrice(undefined))
    },[maxPriceDisplay, dispatch])
    
    useEffect( () => {
        setMinPriceDisplay(minPricePlaceHolder)
        setMaxPriceDisplay(maxPricePlaceHolder)
    },[category, minPricePlaceHolder, maxPricePlaceHolder])

    return (
        <div className="price">
            <div className="price__header">
              {headerLocalName}
            </div>
            <div className="price__input-container">
                <input className={`price__min ${minPriceDisplay !== minPricePlaceHolder ? 'picked':''}`} type="text" value={minPriceDisplay} 
                onChange={(e) => handleChange(e, 'min')} onFocus={(e) => clearPlaceHolder(e, 'min')} onBlur={(e) => onBlur(e, 'min')} />
                <input className={`price__max ${maxPriceDisplay !== maxPricePlaceHolder ? 'picked':''}`} type="text" value={maxPriceDisplay} onChange={(e) => handleChange(e, 'max')} 
                onFocus={(e) => clearPlaceHolder(e, 'max')} onBlur={(e) => onBlur(e, 'max')} />
            </div>
        </div>
    )
}
export default Price