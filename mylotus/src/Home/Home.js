import React from 'react';
import './Home.css'
import flower from '../images/nav-lotus-flower.png';
import shareDiscoverPhone from '../images/share-discover-phone-highres.png';
import showOffPhone from '../images/show-off-phone-highres.png';
import apple from '../images/apple.png';
import spotify from '../images/spotify.png';
import appleMusic from '../images/apple-music.png';
import Footer from "../Footer/Footer";


function Home() {
    return(
        <div id="home">
            <div id="heading">
                <div id="headingLogo">
                    <img src={flower} alt="Lotus flower"/>
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
                <div id="downloadBox">
                    <div id="appleLogo">
                        <img src={apple} alt="Apple logo"/>
                    </div>
                    <div id="downloadText">
                        <p>Download in the</p>
                        <p id="appStoreText">App Store</p>
                    </div>
                </div>
            </div>
            <div id="shareAndDiscover">
                <div id="shareAndDiscoverText">
                    <b><i><p id="shareAndDiscoverHeading">Share and Discover Music</p></i></b>
                    <p id="shareAndDiscoverPara">
                        Share your favorite music with your favorite people and listen to songs shared by them, all with the tap of a button.
                    </p>
                </div>
                <div id="shareAndDiscoverPhone">
                    <img src={shareDiscoverPhone} alt="Screenshot of Lotus"/>
                </div>
            </div>
            <div id="showOff">
                <div id="showOffPhone">
                    <img src={showOffPhone} alt="Screenshot of Lotus"/>
                </div>
                <div id="showOffText">
                    <b><i><p id="showOffHeading">Show Off Your Interests</p></i></b>
                    <p id="showOffPara">
                        Show all of your friends your favorite songs and  artists all in one place.
                    </p>
                </div>
            </div>
            <div id="crossPlatform">
                <b><i><p id="crossPlatformHeading">Cross-Platform Streaming</p></i></b>
                <p id="crossPlatformText">
                    Sync your streaming service and listen in one place with Lotus.
                </p>
                <div id="crossPlatformGraphic">
                    <div><img id="crossPlatformFlower" src={flower} alt="Lotus flower"/></div>
                    <div id="leftArrow">&#10231;</div> <div id="rightArrow">&#10231;</div>
                    <div id="spotifyContainer"><img id="spotifyLogo" src={spotify} alt="Spotify logo"/></div>
                    <div id="appleMusicContainer"><img id="appleMusicLogo" src={appleMusic} alt="Apple music logo"/></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;