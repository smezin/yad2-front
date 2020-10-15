import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const PersonalContent = () => {
    const headerLocalName = fetchFromResource('string', 'personal', 'localName')
    const menuCategories = fetchFromResource('object', 'personal', 'categories')
    const exitButtonText = fetchFromResource('string', 'personal', 'exit', 'localName') 
    
    return (
        <div className="personal-content">
            <div className="personal-content__header">
                {headerLocalName}
            </div>
            <div className="personal-content__menu">
                <div className="personal-content__categories">
                    {
                        Object.keys(menuCategories).map( (category) => 
                        <div className="personal-content__category">
                            {menuCategories[category]['localName']}
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
export default PersonalContent