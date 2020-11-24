import React from 'react';
import './Home.css'
import { Link } from "react-router-dom";
import flower from '../images/nav-lotus-flower.png';


function Home() {
    return(
        <div id="home">
            <div id="heading">
                <div id="headingLogo">
                    <img src={flower}/>
                </div>
                <div id="headingText">
                    <b><i><p id="experience">EXPERIENCE<br/> EVERYTHING</p></i></b>
                    <p id="toLive">
                        To live is to experience. Today, we get to have two lives: one in the real world and one in the virtual world.
                        In this virtual world, we can share everything about ourselves, and we think this should include music.
                    </p>
                </div>
            </div>
            <div id="textAndLink">
                <p>Music isn't just what we listen to, it’s who we are...</p>
                <div id="downloadBox"></div>
            </div>
        </div>
    );
}

export default Home;