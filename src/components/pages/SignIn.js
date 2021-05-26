import React, { useEffect, useState } from 'react'
import LoginImage from '../../images/bkg1.jpeg'
import "./SignIn.css";
import { API_SIGN_IN } from '../../constants/ApiConstants.js'
import { callPost } from '../../service/NetworkService'

export default function SignIn() {
  const handleSignIn = () => {
    const body = {
      email: "admin@jukebox.com",
      password: "password"
    }
    const { responseCode, responseBody } = callPost(API_SIGN_IN, null, body)
    console.log("responseCode " + responseCode)
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
