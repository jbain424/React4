import React from 'react';
import '../css/User.css';
import { Link } from 'react-router-dom'

let plus = require('../assets/plus.png');
let pencil = require('../assets/pencil.png')
let share = require('../assets/share.png')

export const User = ({ username }) => {
  return(
    <>
  <div className="buttons">
    <Link to={"/"}>
    <img className='createPin' alt="logo" src={plus} width="40px" height="40px"/></Link>

  </div>

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
