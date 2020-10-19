import React, { useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { setFloor } from 'actions/item'
import setRangeFromMinMaxStep from 'utility/setRangeFromMinMaxStep'
import { ItemContext } from 'context/ItemContext'
import SinglePickerDiscrete from 'components/body/common/SinglePickerDiscrete'

const ItemFloor = () => {
    const { dispatch } = useContext(ItemContext)
    const floors = setRangeFromMinMaxStep(0, 16)
    const headerLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemFloor', 'headerLocalName')
    return (
        <div className="item-floor">
            <div className="item-floor__header">
                {headerLocalName}
            </div>
            <div className="item-floor__input">
                <SinglePickerDiscrete dispatch={dispatch} options={floors} setValue={setFloor} isOptionsNumeric = {true} />
            </div>
        </div>
    )
}
export default ItemFloor