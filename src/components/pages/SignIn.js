import React, { useEffect, useState } from 'react'
import LoginImage from '../../images/bkg1.jpeg'
import "./SignIn.css";
import { API_SIGN_IN } from '../../constants/ApiConstants.js'
import { callPost } from '../../service/NetworkService'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'

function SignIn() {

  const alert = useAlert()
  let history = useHistory()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ response, setResponse ] = useState(null)

  useEffect(() => {
    if(response !== null){
      switch (response.responseCode) {
        case 200:
          localStorage.setItem('user-token', response.responseBody.token)
          history.push("/home", { token : localStorage.getItem("user-token")})
          break;
        default: 
          alert.error(response.responseBody.body)
          localStorage.removeItem('user-token')
          break;
      }
    }
  }, [ response ])

  
  const handleSignIn = async () => {
      const body = {
        email: email,
        password: password,
      };
      const apiData = await callPost(API_SIGN_IN, null, body);
      setResponse(apiData);
    
  }


  return (
    <div className="sign-in-container">
      <img src={LoginImage} alt="login-music-cover" className="login-cover" />
      <div className="login-detail-container">
        <div className="email-container">
          <label className="label-container">Email</label>
          <input
            className="sign-in-input"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-container">
          <label className="label-container">Password</label>
          <input
            className="sign-in-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="sign-in-btn-container">
          <button type="submit"className="sign-in-btn" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn