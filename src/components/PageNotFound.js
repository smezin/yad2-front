import { page404 } from 'images'
import React from 'react'
import { Link } from 'react-router-dom'
import fetchFromResource from 'utility/fetchFromResource'

const pageImage = require('images/404.jpg')
const pageNotFound = () => {
    const message = fetchFromResource('string', 'pageNotFound', 'messageLocalName')
    const buttonText = fetchFromResource('string', 'pageNotFound', 'buttonLocalName')
    return (
        <div className="page-not-found">
            <img src={page404.imgSrc} alt="404" />
            <div className="page-not-found__message"> {message} </div>
            <Link to="/realestate" >
            <div className="page-not-found__button"> {buttonText} </div>
            </Link>
        </div>
    )
}
export default pageNotFound