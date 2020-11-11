import React from 'react'
import { Link } from 'react-router-dom'
import { bell } from 'resources/specialChars'

const NotificationButton = () => {
    
    return (
        <Link className="notification-button__container" to="/404">         
            <div className="notification-button">
                {bell}
            </div>      
        </Link>
       
    )
}
export default NotificationButton