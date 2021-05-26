import React from 'react'
import LoginImage from '../../images/bkg1.jpeg'
import "./SignIn.css";

export default function SignIn() {

  const handleSignIn = () => {
    alert('Sign in')
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
