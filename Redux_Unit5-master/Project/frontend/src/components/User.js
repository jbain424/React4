import React from 'react';
import '../css/User.css';
import { Link } from 'react-router-dom'

let plus = require('../assets/plus.png');
let pencil = require('../assets/pencil.png')
let share = require('../assets/share.png')

export const User = ({ username, userPins }) => {
  return(
  <>
    <div className="userContainer">
      <span className="buttons">
        <Link to={"/"}>
        <img className='createPin' alt="logo" src={plus} /></Link>

        <Link to={"/pins/"}>
        <img className='editPin' alt="logo" src={pencil} /></Link>

        <Link to={"/"}>
        <img className='sharePin' alt="logo" src={share} /></Link>
      </span>
    </div>

    <div className="userProfile">
        { username.username }
        <p className="followers"> 10 followers • 5 following </p>
    </div>

    <img id="userPic"src={username.profile_pic} alt="" />

    <div className="boardsNpins">
      <div className="boards">
        <Link to={"/:id/boards/"}>Boards</Link>
      </div>

      <div className="pins">
        <Link to={"/username/:id/pins/"}>Pins</Link>
        <div className="allUserPins">
          {username.pin_url}
        </div>
      </div>

  </div>
  </>
  )
}


export default User
