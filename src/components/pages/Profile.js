import React, { useEffect, useState, useRef } from "react";
import UserIcon from "../../images/user-icon.png";
import CamIcon from "../../images/cam-icon.png"
import { callPatch, callGet, uploadFile } from "../../service/NetworkService";
import "./Profile.css";
import {
  API_PROFILE_UPDATE,
  API_FETCH_PROFILE,
  API_UPDATE_PROFILE_PICTURE
} from "../../constants/ApiConstants.js";
import { useAlert } from "react-alert";
import { createAuthHeader } from "../../utility/RequestUtil";

function Profile() {
  const alert = useAlert();
  const hiddenFileInput = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  let [profilePicUrl, setProfilePicUrl] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (response === null) callFetchProfileAPI();
    else {
      setInputFields({
        firstName: response.responseBody.firstName,
        lastName: response.responseBody.lastName,
        email: response.responseBody.email,
      });
      if(response.responseBody.profilePic !== null){
        setProfilePicUrl(response.responseBody.profilePic.downloadUri);
        console.log(profilePicUrl)
      }else{
        setProfilePicUrl(UserIcon)
      }
    }
  }, [response]);

  const callFetchProfileAPI = async () => {
    let fetchProfileUrl = API_FETCH_PROFILE.replace("{id}", "1");
    console.log(`fetchProfileUrl = ${fetchProfileUrl}`);
    const apiData = await callGet(fetchProfileUrl, createAuthHeader());
    console.log(apiData);
    setResponse(apiData);
  };

  const handleFirstNameChange = (event) => {
    setInputFields({
      firstName: event.target.value,
      lastName: inputFields.lastName,
      email: inputFields.email,
    });
  };

  const handleLastNameChange = (event) => {
    setInputFields({
      firstName: inputFields.firstName,
      lastName: event.target.value,
      email: inputFields.email,
    });
  };



  const handleProfileSubmit = async () => {
    console.log(
      `firstName = ${inputFields.firstName} \n lastName = ${inputFields.lastName}`
    );
    const body = {
      id: 1,
      firstName: inputFields.firstName,
      lastName: inputFields.lastName,
      userType: "JUKEBOX_ADMIN",
    };
    console.log(API_PROFILE_UPDATE);
    const apiData = await callPatch(
      API_PROFILE_UPDATE,
      createAuthHeader(),
      body
    );
    if (apiData.responseCode === 200) {
      alert.success("Profile updated");
    } else {
      alert.error("Profile update failed");
    }
  };
  
  const callUploadImageApi = async () => {
    const apiData = await uploadFile(API_UPDATE_PROFILE_PICTURE, createAuthHeader, selectedFile);
    if (apiData.responseCode === 200) {
      alert.success("Profile picture updated");
    } else {
      console.log(apiData.responseBody)
      alert.error("Profile picture update failed");
    }
  }

  const imageChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
		setIsSelected(true);
    callUploadImageApi();
    console.log("File selected " + isSelected)
  }

  const handleImageSelection = (event) => {
      hiddenFileInput.current.click();
  }

  return (
    <>
      <div className="profile-container">
        <div className="pic-container">
          <div className="profile-pic-container">
            <img
              src={profilePicUrl}
              alt="user-pic-icon"
              className="profile-pic"
            ></img>
            <img
              src={CamIcon}
              className="cam-icon"
              onClick={handleImageSelection}
            ></img>
            <input type="file" style={{display: 'none'}} onChange={imageChangeHandler} ref={hiddenFileInput}></input>
          </div>
        </div>
        <div className="user-detail-container">
          <div className="property-container">
            <label className="user-label">First Name</label>
            <input
              type="text"
              className="user-input"
              onChange={handleFirstNameChange}
              value={inputFields.firstName}
            />
          </div>
          <div className="property-container">
            <label className="user-label">Last Name</label>
            <input
              type="text"
              className="user-input"
              onChange={handleLastNameChange}
              value={inputFields.lastName}
            />
          </div>
          <div className="property-container">
            <label className="user-label">Email</label>
            <input
              type="text"
              className="user-input"
              defaultValue={inputFields.email}
              disabled={true}
            />
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

export default Profile;
