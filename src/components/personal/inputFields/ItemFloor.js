import React, { useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { setFloor } from 'actions/item.actions'
import setRangeFromMinMaxStep from 'utility/setRangeFromMinMaxStep'
import { ItemContext } from 'context/ItemContext'
import SinglePickerDiscrete from 'components/personal/inputFields/common/SinglePickerDiscrete'

const ItemFloor = () => {
    const { dispatch } = useContext(ItemContext)
    const floors = setRangeFromMinMaxStep(0, 16)
    const headerLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemFloor', 'headerLocalName')
    const placeholderLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemFloor', 'placeholderLocalName')
    return (
        <div className="item-floor">
            <div className="item-floor__header">
                {headerLocalName}
            </div>
            <div className="item-floor__input">
                <SinglePickerDiscrete 
                    dispatch={dispatch} options={floors} setValue={setFloor} isOptionsNumeric = {true}
                    placeholder={placeholderLocalName}
                />
            </div>
        </div>
    )
}
export default ItemFloor