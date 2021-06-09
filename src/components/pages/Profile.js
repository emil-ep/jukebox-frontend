import React, { useState } from 'react'
import UserIcon from '../../images/user-icon.png'
import { callPatch, callPost } from '../../service/NetworkService';
import './Profile.css'
import { API_PROFILE_UPDATE } from '../../constants/ApiConstants.js'
import { useAlert } from 'react-alert'

function Profile() {
  const alert = useAlert()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
      userType: "JUKEBOX_ADMIN"
    }
    const header = {
      "Authorization": `Bearer ${localStorage.getItem("user-token")}`,
    };
    console.log(API_PROFILE_UPDATE)
    const apiData = await callPatch(API_PROFILE_UPDATE, header, body)
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
            />
          </div>
          <div className="property-container">
            <label className="user-label">Last Name</label>
            <input type="text" className="user-input" onChange={handleLastNameChange}/>
          </div>
          <div className="property-container">
            <label className="user-label">Email</label>
            <input type="text" className="user-input" />
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
