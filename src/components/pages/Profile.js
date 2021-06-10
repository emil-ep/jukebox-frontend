import React, { useEffect, useState } from 'react'
import UserIcon from '../../images/user-icon.png'
import { callPatch, callGet } from '../../service/NetworkService';
import './Profile.css'
import { API_PROFILE_UPDATE, API_FETCH_PROFILE } from '../../constants/ApiConstants.js'
import { useAlert } from 'react-alert'
import { createAuthHeader } from '../../utility/RequestUtil'

function Profile() {
  const alert = useAlert()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [response, setResponse] = useState(null);


useEffect(() => {
  if (response === null) callFetchProfileAPI()
  else{
    setFirstName(response.responseBody.firstName)
    setLastName(response.responseBody.lastName)
    setEmail(response.responseBody.email)
  }
}, [response])

const callFetchProfileAPI = async () => {
  let fetchProfileUrl = API_FETCH_PROFILE.replace("{id}", "1")
  console.log(`fetchProfileUrl = ${fetchProfileUrl}`);
  const apiData = await callGet(fetchProfileUrl, createAuthHeader())
  console.log(apiData)
  setResponse(apiData)
}


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    console.log(firstName)
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleProfileSubmit =  async () => {
    const body = {
      id: 1,
      firstName: firstName,
      lastName: lastName,
      userType: "JUKEBOX_ADMIN",
    };
    console.log(API_PROFILE_UPDATE)
    const apiData = await callPatch(API_PROFILE_UPDATE, createAuthHeader(), body)
    if(apiData.responseCode === 200){
      alert.success("Profile updated")
    }else{
      alert.error("Profile update failed")
    }
  }

  return (
    <>
      <div className="profile-container">
        <div className="profile-pic-container">
          <img src={UserIcon} alt="user-pic-icon" className="profile-pic"></img>
        </div>
        <div className="user-detail-container">
          <div className="property-container">
            <label className="user-label">First Name</label>
            <input
              type="text"
              className="user-input"
              onChange={handleFirstNameChange}
              value={firstName}
            />
          </div>
          <div className="property-container">
            <label className="user-label">Last Name</label>
            <input
              type="text"
              className="user-input"
              onChange={handleLastNameChange}
              value={lastName}
            />
          </div>
          <div className="property-container">
            <label className="user-label">Email</label>
            <input type="text" className="user-input" defaultValue={email} disabled={true} />
          </div>
          <div className="property-container">
            <label className="user-label">Password</label>
            <input type="password" className="user-input" />
          </div>
          <div className="property-container">
            <label className="user-label">Confirm Password</label>
            <input type="password" className="user-input" />
          </div>
        </div>
        <div className="save-btn-container">
          <button type="submit" onClick={handleProfileSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile
