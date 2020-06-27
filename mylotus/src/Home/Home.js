import React from 'react';
import './Home.css'
import logo from "../images/Lotus.png"
import image from '../images/LotusTitle.png'
import { Link } from "react-router-dom";
import Features from '../Values/values';

function Home() {
    return(
        <div className="landing-page">
            
    {/* Navigation Menu */}

    <nav className="navbar shadow-5">
      <div className="nav-logo-ctr">
       <Link to='/'> <img className="nav-logo" src={image} alt="This is the Lotus logo"></img></Link>
      </div>
      <ul className="navbar-ctr">
        <Link to="About"><li className="nav-itm grow"> About us </li></Link>
        <Link to="Contact"><li className="nav-itm grow"> Contact </li></Link>

      </ul>
    </nav>
        <div id="Home">
            <div className="h-logo-ctn">
                <img className="h-logo" src={logo} alt="logo"></img>
            </div>
            <div className="h-ctn">
            <h1 className="h-header-txt"> <i>Experience </i><i> Everything</i></h1>
            <h2 className="h-sub-txt">To live is to experience. Today, we get to have two lives: one in the real world and one in the virtual world. In this virtual world, we can share everything about ourselves, and we think this should include music. </h2>
            <p className="h-sub-sub-txt"> Music isn’t just what we listen to, it's who we are. <br/> Lotus is a social networking platform that lets you  share. </p>
            <div className="h-btn-ctn grow ">
            <Link to="Contact"><li> Stay up to date </li></Link>
            </div>
            </div>
        </div>
        <Features/>
        
        </div>



    );
}

export default Home;