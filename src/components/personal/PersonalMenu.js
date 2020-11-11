import React, { useState, useContext } from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import { signAllOut } from 'actions/user.actions'
import { UserContext } from 'context/UserContext'

const PersonalMenu = (props) => {
    const { tab, setTab } = props
    const headerLocalName = fetchFromResource('string', 'personal', 'localName')
    const menuCategories = fetchFromResource('object', 'personal', 'categories')
    const exitButtonText = fetchFromResource('string', 'personal', 'exit', 'localName') 
    const welcomeMessage = fetchFromResource('string', 'personal', 'welcomeMessage', 'localName')
    const [category, setCategory] = useState(tab || 'publish')
    const { user, dispatch } = useContext(UserContext)
    
    const onMenuCategoryPick = (menuCategory) => {
        setCategory(menuCategory)
        setTab(menuCategory)
    }
    const onExit = () => {
        signAllOut(dispatch)        
    }
    return (
        <div className="personal-content__top">
            <div className="personal-content__header">
                {headerLocalName}
                <span className="welcome-message">{welcomeMessage} {user.username}</span>                
            </div>
            <div className="personal-content__menu">
                <div className="personal-content__categories">
                    {
                        Object.keys(menuCategories).map( (menuCategory) => 
                        <div className={`personal-content__category${menuCategory === category ? '__picked':''}`} 
                        onClick={()=>onMenuCategoryPick(menuCategory)} key={menuCategory} >
                            {menuCategories[menuCategory]['localName']}
                        </div>
                        )
                    }
                </div>
                <div className="personal-content__exit-button" onClick={onExit} >
                    {exitButtonText}
                </div>
            </div>
        </div>
    )
}
export default PersonalMenu