import React, { useContext, useState } from 'react'
import { ItemContext } from 'context/ItemContext'
import { setCategory } from 'actions/item'
import fetchFromResource from 'utility/fetchFromResource'


const ItemCategory = () => {
    const [pickedCategory, setPickedCategory] = useState('forsale')
    const headerLocalName = fetchFromResource('string', 'personal', 'itemForm', 'itemTypes', 'headerLocalName')
    const categoriesObj = fetchFromResource('object', 'personal', 'itemForm', 'itemTypes')
    const { dispatch } = useContext(ItemContext)
    
    const onChange = (e) => {
        setPickedCategory(e.target.value)
        dispatch(setCategory(e.target.value))        
    }
    return(
        <div className="item-category">
            <div className="item-category__header header">
                {headerLocalName}
            </div>
            <div className="item-category__input input">
                <select value={pickedCategory} onChange={(e)=>onChange(e)} >
                {
                    Object.keys(categoriesObj).map((categoryOption) => (
                        <option value={categoryOption} key={categoryOption} >
                            {categoriesObj[categoryOption]['localName']}
                        </option>
                    ))
                }
                </select>
            </div>        
        </div>
    )
}
export default ItemCategory