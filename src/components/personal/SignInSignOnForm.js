import React, { useContext, useState } from 'react'
import validator from 'validator'
import { signInImage } from 'images'
import fetchFromResource from 'utility/fetchFromResource'
import SideAd from 'components/body/common/SideAd'
import { signIn, signUp } from 'actions/auth.actions'
import { AuthContext } from 'context/AuthContext'

const SignInSignOnForm = () => {
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
    const mobileLocalName = fetchFromResource('string', 'signIn', 'mobile','localName')
    const locale = 'he-IL'
    const { dispatch } = useContext(AuthContext)
    const [isSignUp, setIsSignUp] = useState(false)
    const renderSignUp = () => setIsSignUp(true)
    const renderSignIn = () => setIsSignUp(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [reEnteredPassword, setReEnteredPassword] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const handleUserName = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleEmail = (e) => setEmail((e.target.value).toLowerCase())
    const handleMobile = (e) => {
        const unDashedPhoneNumber = (e.target.value).replace('-','')
        const standardDashedPhoneNumber = [unDashedPhoneNumber.slice(0,3) + '-' + unDashedPhoneNumber.slice(3)].join('')
        setMobile(standardDashedPhoneNumber) 
        console.log(standardDashedPhoneNumber)       
    }
    const handleReEnteredPassword = (e) => setReEnteredPassword(e.target.value)
    const sendRequest = (isSignUp) => {
        if (isSignUp) {
            validateForm().validForm && signUp(username, email, mobile, password, dispatch);
        } else {
            signIn(username, password, dispatch)
        }
    } 
    const validateForm = () => {
        const validationResult = {
            "username": true,
            "email": true,
            "mobile": true,
            "password": true,
            "reEnteredPassword": true,
            "validForm": false
        }
        validationResult.email = validator.isEmail(email)
        validationResult.mobile = validator.isMobilePhone(mobile.replace('-',''), locale)
        validationResult.password = validator.isLength(password, {min:4, max:16}) 
        validationResult.username = validator.isLength(username, {min:4, max:12}) 
        validationResult.reEnteredPassword = password === reEnteredPassword
        validationResult.validForm = validationResult.email && validationResult.username && validationResult.mobile
                                    && validationResult.password && validationResult.reEnteredPassword
        return validationResult
    }
    
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
                        <span className={"sign-in__username-header"}>{userNameLocalName}</span> 
                        <input placeholder={userNameLocalPlaceholder} onChange={(e)=>handleUserName(e)} 
                            className={validateForm().username?'':'sign-in__inavlid-input'} />              
                    </div>                   
                   
                    <div className="sign-in__password">
                        <span className="sign-in__password-header"> {passwordLocalName}</span>
                        <input placeholder={passwordLocalPlaceholder} onChange={(e)=>handlePassword(e)}
                        className={validateForm().password?'':'sign-in__inavlid-input'} />
                    </div>
                    {
                        isSignUp &&
                        <div className="sign-in__re-enter-password">
                            <span className="sign-in__re-enter-password-header"> {reEnterPasswordLocalName}</span>
                            <input placeholder={reEnterPasswordLocalPlaceholder} onChange={(e)=>handleReEnteredPassword(e)}
                            className={validateForm().reEnteredPassword?'':'sign-in__inavlid-input'} />
                        </div>
                    }
                    {
                        isSignUp &&
                        <div className="sign-in__email">
                            <span className="sign-in__email-header"> {emailLocalName}</span>
                            <input placeholder={emailLocalName} type="email" required onChange={(e)=>handleEmail(e)}
                            className={validateForm().email?'':'sign-in__inavlid-input'} />
                        </div>
                    }
                    {
                        isSignUp &&
                        <div className="sign-in__mobile">
                            <span className="sign-in__mobile-header"> {mobileLocalName}</span>
                            <input placeholder={mobileLocalName} required onChange={(e)=>handleMobile(e)}
                            className={validateForm().mobile?'':'sign-in__inavlid-input'} />
                        </div>
                    }
                    <span className="forgot-password">{!isSignUp && forgotPasswordLocalName}</span>
                    <span className="submit-form" onClick={()=>sendRequest(isSignUp)}>{submitLocalName}</span>
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
export default SignInSignOnForm