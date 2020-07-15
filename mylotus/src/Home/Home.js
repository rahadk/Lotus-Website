import React from 'react';
import './Home.css'
import { Link } from "react-router-dom";
import lotusimg from '../images/nav-lotus-flower.png';


function Home() {
    return(
        <div id="home"> 
          <img className="home-flower" src={lotusimg}></img>
            <div className="home-content-ctn">
            <h1 className="lotus-lingo"> Experience</h1>
            <h1 className="lotus-lingo"> Everything</h1>
            <p className="lotus-home-text"> To live is to experience. Today, we get to have two lives: one in the real world and one in the virtual world. In this virtual world, we can share everything about ourselves, and we think this should include music.</p>
            </div>

<h2 className="home-btm-txt"> Music isn't just what we listen to, it’s who we are... </h2>
        </div>



    );
}

export default Home;