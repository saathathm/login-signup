import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/Icons/person.png'
import email_icon from '../Assets/Icons/email.png'
import password_icon from '../Assets/Icons/password.png'

export const LoginSignup = () => {
    const [action, setAction] = useState('Login');
    return (
        <div className="container">
            <div className="header">
                <div className="text">
                    {action}
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" ? <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" name="" id="" placeholder='Name' />
                </div> : <span></span>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" name="" id="" placeholder='Email' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" name="" id="" placeholder='Password' />
                </div>
            </div>
            {action === "Login" ? <div className="forgot-password">
                Lost Password? <span> Click Here! </span>
            </div> : <span></span>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => {
                    setAction("Sign Up")
                }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit grey" : "submit"} onClick={() => {
                    setAction("Login")
                }}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup