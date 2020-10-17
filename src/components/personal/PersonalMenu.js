import React, { useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const PersonalMenu = () => {
    const headerLocalName = fetchFromResource('string', 'personal', 'localName')
    const menuCategories = fetchFromResource('object', 'personal', 'categories')
    const exitButtonText = fetchFromResource('string', 'personal', 'exit', 'localName') 
    const [category, setCategory] = useState('publish')
    
    const onClick = (menuCategory) => {
        setCategory(menuCategory)
        console.log(category)
    }
    return (
        <div className="personal-content">
            <div className="personal-content__header">
                {headerLocalName}
            </div>
            <div className="personal-content__menu">
                <div className="personal-content__categories">
                    {
                        Object.keys(menuCategories).map( (menuCategory) => 
                        <div className={`personal-content__category${menuCategory === category ? '__picked':''}`} onClick={()=>onClick(menuCategory)} key={menuCategory} >
                            {menuCategories[menuCategory]['localName']}
                        </div>
                        )
                    }
                </div>
                <div className="personal-content__exit-button">
                    {exitButtonText}
                </div>
            </div>
        </div>
    )
}
export default PersonalMenu