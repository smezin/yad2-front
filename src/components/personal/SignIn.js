import React, { useState } from 'react'
import { signInImage } from 'images'
import fetchFromResource from 'utility/fetchFromResource'
import SideAd from 'components/body/common/SideAd'
import { signUp } from 'actions/auth'

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
    const reEnterPasswordLocalName = fetchFromResource('string', 'signIn', 'reEnterPassword','localName')
    const reEnterPasswordLocalPlaceholder = fetchFromResource('string', 'signIn', 'reEnterPassword','localPlaceholder')
    const alreadySignedUp = fetchFromResource('string', 'signIn', 'alreadySignedUp','localName')
    const emailLocalName = fetchFromResource('string', 'signIn', 'email','localName')
    const [isSignUp, setIsSignUp] = useState(false)
    const renderSignUp = () => setIsSignUp(true)
    const renderSignIn = () => setIsSignUp(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const handleUserName = (e) => setUserName(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const sendRequest = () => signUp(userName, email, password)
    return (
        <div className="sign-in-page">
        <SideAd adSide="right" />
            <div className="sign-in">
                <img src={signInImage.imgSrc} alt={signInImage.imgAlt} />
                <div className="sign-in-input-fields-container">
                    <div className="sign-in__header">
                        {headerLocalName}
                    </div>
                    <div className="sign-in__username">
                        <span className="sign-in__username-header">{userNameLocalName}</span> 
                        <input placeholder={userNameLocalPlaceholder} onChange={(e)=>handleUserName(e)}/>              
                    </div>
                    <div className="sign-in__password">
                        <span className="sign-in__password-header"> {passwordLocalName}</span>
                        <input placeholder={passwordLocalPlaceholder} onChange={(e)=>handlePassword(e)} />
                    </div>
                    {
                        isSignUp &&
                        <div className="sign-in__re-enter-password">
                            <span className="sign-in__re-enter-password-header"> {reEnterPasswordLocalName}</span>
                            <input placeholder={reEnterPasswordLocalPlaceholder} />
                        </div>
                    }
                    <div className="sign-in__email">
                        <span className="sign-in__email-header"> {emailLocalName}</span>
                        <input placeholder={emailLocalName} onChange={(e)=>handleEmail(e)} />
                    </div>
                    <span className="forgot-password">{!isSignUp && forgotPasswordLocalName}</span>
                    <span className="submit-form" onClick={sendRequest}>{submitLocalName}</span>
                    <div className="register">
                        <span className="not-registered-yet">{!isSignUp && notRegisteredYetLocalName}</span>
                        <span className="sign-up" onClick={renderSignUp}>{!isSignUp && signUpLocalName}</span>
                        <span className="already-signed-up" onClick={renderSignIn}>{isSignUp && alreadySignedUp}</span>
                    </div>
                </div>
            </div>
        <SideAd adSide="left" />
        </div>
    
    )
}
export default SignIn