import React, { useEffect, useState } from 'react'
import LoginImage from '../../images/bkg1.jpeg'
import "./SignIn.css";
import { API_SIGN_IN } from '../../constants/ApiConstants.js'
import { callPost } from '../../service/NetworkService'

function SignIn() {

  const [ responseCode, setResponseCode ] = useState(0)

  useEffect(() => {
    if(responseCode !== 0){
      console.log("API response received and updated to responseCode variable")
    }
  }, [ responseCode ])

  const handleSignIn = async () => {
    console.log(`Sign in function is called, responseCode = ${responseCode}`)
    const body = {
      email: "admin@jukebox.com",
      password: "password"
    }
    const apiData = await callPost(API_SIGN_IN, null, body)
    console.log(apiData)
    setResponseCode(apiData.responseCode)
  }
  return (
    <div className="sign-in-container">
      <img src={LoginImage} alt="login-music-cover" className="login-cover" />
      <div className="login-detail-container">
        <div className="email-container">
          <label className="label-container">Email</label>
          <input className="sign-in-input" type="text"/>
        </div>
        <div className="password-container">
          <label className="label-container">Password</label>
          <input className="sign-in-input" type="password" />
        </div>
        <div className="sign-in-btn-container">
          <button className="sign-in-btn" onClick={handleSignIn}>
          Sign In
        </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn