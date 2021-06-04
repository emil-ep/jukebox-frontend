import React from 'react'
import UserIcon from '../../images/user-icon.png'
import './Profile.css'

function Profile() {
    return (
      <>
        <div className="profile-container">
          <div className="profile-pic-container">
            <img
              src={UserIcon}
              alt="user-pic-icon"
              className="profile-pic"
            ></img>
          </div>
          <div className="user-detail-container">
            <div className="property-container">
              <label className="user-label">First Name</label>
              <input type="text" className="user-input" />
            </div>
            <div className="property-container">
              <label className="user-label">Last Name</label>
              <input type="text" className="user-input" />
            </div>
            <div className="property-container">
              <label className="user-label">Email</label>
              <input type="text" className="user-input" />
            </div>
            <div className="property-container">
              <label className="user-label">Password</label>
              <input type="password" className="user-input" />
            </div>
          </div>
          <div className="save-btn-container">
          <button type="submit">Submit</button>
          </div>
          
        </div>
      </>
    );
}

export default Profile
