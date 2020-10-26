import React, { useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { setRooms } from 'actions/item.actions'
import setRangeFromMinMaxStep from 'utility/setRangeFromMinMaxStep'
import { ItemContext } from 'context/ItemContext'
import SinglePickerDiscrete from 'components/personal/inputFields/common/SinglePickerDiscrete'

const ItemRooms = () => {
    const { dispatch } = useContext(ItemContext)
    const rooms = setRangeFromMinMaxStep(0, 12, 0.5)
    const headerLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemRooms', 'headerLocalName')
    const placeholderLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemRooms', 'placeholderLocalName')
    return (
        <div className="item-rooms">
            <div className="item-rooms__header">
                {headerLocalName}
            </div>
            <div className="item-rooms__input">
                <SinglePickerDiscrete 
                    dispatch={dispatch} options={rooms} setValue={setRooms} isOptionsNumeric = {true} 
                    placeholder={placeholderLocalName}
                />
            </div>
        </div>
    )
}
export default ItemRooms