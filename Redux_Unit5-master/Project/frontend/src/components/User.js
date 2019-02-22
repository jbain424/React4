import React from 'react';
import '../css/User.css';


export const User = ({ username }) => {
  return(
    <>
  <div className="userContainer">
      <div className="userProfile">
        { username.username }
        <p className="followers"> 10 followers • 5 following </p>
      </div>

      <img id="userPic"src={username.profile_pic} alt="" />
  </div>

    </>
  )
}


export default User
