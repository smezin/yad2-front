import React, { useContext, useState } from 'react'
import { ItemContext } from 'context/ItemContext'
import { setCategory } from 'actions/item'
import fetchFromResource from 'utility/fetchFromResource'


const ItemCategory = () => {
    const [pickedCategory, setPickedCategory] = useState('forsale')
    const categoriesObj = fetchFromResource('object', 'personal', 'itemTypes')
    const categoriesLocalNames = Object.keys(categoriesObj).map((category) => categoriesObj[category]['localName'])
    const { dispatch } = useContext(ItemContext)
    
    const onChange = (e) => {
        setPickedCategory(e.target.value)
        dispatch(setCategory(e.target.value))        
    }
    return(
        <div className="add-item-form">
             <div>
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