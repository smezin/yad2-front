import React, { useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { setPropertyType } from 'actions/item'
import { ItemContext } from 'context/ItemContext'
import SinglePickerDiscrete from './common/SinglePickerDiscrete'

const ItemPropertyType = (props) => {
    const { category } = props
    const { dispatch } = useContext(ItemContext)
    const allTypesObj = fetchFromResource('object', 'realestateSearchBar', 'propertyType', 'types', category)
    const allTypes =  Object.keys(allTypesObj).map((propertyType) => allTypesObj[propertyType]['localName'])
    const headerLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemPropertyType', 'headerLocalName')
    const placeholderLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemPropertyType', 'placeholderLocalName')

    return (
        <div className="item-property-type">
            <div className="item-property-type__header">
                {headerLocalName}
            </div>
            <div className="item-property-type__input">
                <SinglePickerDiscrete 
                    dispatch={dispatch} options={allTypes} setValue={setPropertyType} isOptionsNumeric = {false}
                    placeholder={placeholderLocalName}
                />
            </div>
        </div>
    )
}
export default ItemPropertyType