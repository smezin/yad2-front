import React from 'react'
import { Link } from 'react-router-dom'
import { person } from 'images'

const PersonalZoneButton = () => {
    
    return (
        <Link className="personal-zone-button__container" to={{pathname: "/personal", state: {tab: 'publish'}}}>         
            <div className="personal-zone-button">
                <img src={person.imgSrc} alt={person.alt} />
            </div>      
        </Link>
       
    )
}
export default PersonalZoneButton