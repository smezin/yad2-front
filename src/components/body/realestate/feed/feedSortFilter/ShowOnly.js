import { toggleShowOnlyItemsWithImage, toggleShowOnlyItemsWithPrice } from 'actions/filters.actions'
import { FiltersContext } from 'context/FiltersContext'
import React, { useContext, useState } from 'react'
import { NIS } from 'resources/specialChars'
import fetchFromResource from 'utility/fetchFromResource'

const ShowOnly = () => {
    const headerLocalName = fetchFromResource('string', 'feedSortFilter', 'showOnly', 'headerLocalName')
    const withImageLocalName = fetchFromResource('string', 'feedSortFilter', 'showOnly', 'withImage', 'localName')
    const withPriceLocalName = fetchFromResource('string', 'feedSortFilter', 'showOnly', 'withPrice', 'localName')
    const [withImageOnly, setWithImageOnly] = useState(false)
    const [withPriceOnly, setWithPriceOnly] = useState(false)
    const { dispatch } = useContext(FiltersContext)

    const toggleWithPrice = () => {
        dispatch(toggleShowOnlyItemsWithPrice(!withPriceOnly))
        setWithPriceOnly(!withPriceOnly)
    }
    const toggleWithImage = () => {
        dispatch(toggleShowOnlyItemsWithImage(!withImageOnly))
        setWithImageOnly(!withImageOnly)
    }

    return (
        <div className="show-only">
            <div className="show-only__header">
                {headerLocalName}
            </div>
            <div className={`show-only__with-price${withPriceOnly ? '__picked':''}`} onClick={toggleWithPrice}>
                {NIS} {withPriceLocalName} 
            </div>
            <div className={`show-only__with-image${withImageOnly ? '__picked':''}`} onClick={toggleWithImage}>
                {withImageLocalName}
            </div>            
        </div>
    )
}
export default ShowOnly