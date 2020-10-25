import React from 'react'
import { signInImage } from 'images'
import fetchFromResource from 'utility/fetchFromResource'
import { registerLocale } from 'react-datepicker'

const SignIn = () => {
    const headerLocalName = fetchFromResource('string', 'signIn', 'localName')
    const userNameLocalName = fetchFromResource('string', 'signIn', 'userName','localName')
    const userNameLocalPlaceholder = fetchFromResource('string', 'signIn', 'userName','localPlaceholder')
    const passwordLocalName = fetchFromResource('string', 'signIn', 'password','localName')
    const passwordLocalPlaceholder = fetchFromResource('string', 'signIn', 'password','localPlaceholder')
    const forgotPasswordLocalName = fetchFromResource('string', 'signIn', 'forgotPassword','localName')
    const submitLocalName = fetchFromResource('string', 'signIn', 'submitForm','localName')
    const notRegisteredYetLocalName = fetchFromResource('string', 'signIn', 'notRegisteredYet','localName')
    const signUpLocalName = fetchFromResource('string', 'signIn', 'signUp','localName')
    return (
    <div className="sign-in">
        <img src={signInImage.imgSrc} alt={signInImage.imgAlt} />
        <div className="sign-in-input-fields-container">
            <div className="sign-in__header">
                {headerLocalName}
            </div>
            <div className="sign-in__username">
                <span className="sign-in__username-header">{userNameLocalName}</span> 
                <input placeholder={userNameLocalPlaceholder} />              
            </div>
            <div className="sign-in__password">
                <span className="sign-in__password-header"> {passwordLocalName}</span>
                <input placeholder={passwordLocalPlaceholder} />
            </div>
            <span className="forgot-password">{forgotPasswordLocalName}</span>
            <span className="submit-form">{submitLocalName}</span>
            <div className="register">
                <span className="not-registered-yet">{notRegisteredYetLocalName}</span>
                <span className="sign-up">{signUpLocalName}</span>
            </div>
        </div>
    </div>
    )
}
export default SignIn