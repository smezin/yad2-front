import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const PersonalPage = () => {
    const headerLocalName = fetchFromResource('string', 'personalPage', 'localName')
    const menuCategories = fetchFromResource('object', 'personalPage', 'categories')
    const exitButtonText = fetchFromResource('string', 'personal-page', 'exit', 'localName') 

    return (
        <div className="personal-page">
            <div className="personal-page__header">
                {headerLocalName}
            </div>
            <div className="personal-page__menu">
                <div className="personal-page__categories">
                    {
                        Object.keys(menuCategories).map( (category) => menuCategories[category]['localName'])
                    }
                </div>
                <div className="personal-page__exitButton">
                    {exitButtonText}
                </div>
            </div>
        </div>
    )
}
export default PersonalPage