import React from 'react';
import './Home.css'
import logo from "../images/Lotus.png"
import image from '../images/LotusTitle.png'
import { Link } from "react-router-dom";
import About from '../About/About';

function Home() {
    return(
        <div className="landing-page">

    {/* Navigation Menu */}

    <nav className="navbar shadow-5">
      <div className="nav-logo-ctr">
       <Link to='/'> <img className="nav-logo" src={image} alt="This is the Lotus logo"></img></Link>
      </div>
      <ul className="navbar-ctr">
        <Link to="About"><li className="nav-itm grow"><a href="#"> About us </a></li></Link>
        <Link to="Features"><li className="nav-itm grow"><a href="#"> Features </a></li></Link>
        <Link to="Contact"><li className="nav-itm grow"><a href="#"> Contact </a></li></Link>
        <li className="nav-btn grow br4 "><a href="https://mailchi.mp/587a0b5c40b7/lotus"> Sign up </a></li>

      </ul>
    </nav>

        <div id="Home">
            <div className="h-logo-ctn">
                <img className="h-logo" src={logo} alt="logo"></img>
            </div>
            <h1 className="h-header-txt"> Experience <i> Everything.</i></h1>
            <h2 className="h-sub-txt">To live is to experience. Today, we get to have two lives: one in the real world and one in the virtual world. In this virtual world, we can share everything about ourselves, and we think this should include music. </h2>
            <p className="h-sub-sub-txt"> Music isn’t just what we listen to, it's who we are. <br/> Lotus is a social networking platform that lets you  share. </p>
            <div className="h-btn-ctn grow ">
                <a href="https://mailchi.mp/587a0b5c40b7/lotus"> Sign up to recieve updates</a>
            </div>

            <div className="h-tooltip">
                <p className="h-tooltip-txt"> Welcome!</p>
            </div>
        </div>
        </div>



    );
}

export default Home;