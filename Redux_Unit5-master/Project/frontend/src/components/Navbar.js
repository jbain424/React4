import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

let logo = require('../assets/epingle_logo.png');
let magGlass = require('../assets/magnifying_glass copy.png')

const Navbar = (props) => {
  return(
    <>
    <nav>
          <div className="navContainer">
            <Link to={"/"}>
            <img className='homelogo' alt="logo" src={logo} width="40px" height="40px"/></Link>

          <div className="leftNav">
            <img className="magGlass" src={magGlass} alt='magGlass'/>
            <input className="searchBar" type="text" placeholder="Search"></input>
          </div>

          <div className="rightNav">
            <Link to='/'>Home</Link>
            <Link to='/following'>Following</Link>
            <Link to={"/username"}>Username</Link>
          </div>

          <hr></hr>
     </div>
   </nav>


    </>
  )
}



export default Navbar
