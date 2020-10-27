import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap';
import './About.css'
import { Link } from "react-router-dom";
const flower =  require("../images/nav-lotus-flower.png");


class About extends React.Component{
    render(){
        return(

            <div id="aboutSection">

                <div id="aboutLotus">

                    <div id="headerContainer">

                        <div id="aboutSpanContainer">
                            <span id="aboutSpan">About Lotus </span>
                        </div>

                        <div id="aboutFlowerContainer">
                            <Image id="aboutUsFlower" src={flower}></Image>
                        </div>
                        
                    </div>


                    <p>
                        Our goal is to disrupt the traditional social media landscape of just sharing pictures, 
                        ideas, and videos to sharing something more meaningful: Live Experiences.
                    </p>
                    
                </div>
                
                <div id="theMission">
                    <span id="theMissionHeader">The Mission</span>
                    <p>
                        To create a platform where users can discover, experience, and share all of their favorite music from a w
                        ide range of services in one location.
                    </p>
                </div>

                <div id="theVision">
                    <span id="theVisionHeader">The Vision</span>
                    <p>
                        A world united through music.
                    </p>
                </div>

                <div id="theStory">
                    <span id="theStoryHeader">The Story</span>
                    <p>
                        More and more these days, people are trying to share music with their friends on social media. This normally comes in the form of a screenshot on Instagram or Snapchat or a link on Facebook or Twitter. While this is great for sharing, people looking to listen to the song, add it to a playlist, or share with their friends must go to a different service and find it themselves.
                    </p>
                    <p>
                        Furthermore, with the streaming market being split between Apple Music, Spotify, and a list of other streaming services, users can only interact with other users of the same service. And thus Lotus was born. Lotus is a social network platform dedicated to discovering, experiencing, and sharing music.
                    </p>
                </div>

                <div id="theName">
                    <span id="theNameHeader">The Name</span>
                    <p>We chose the lotus flower as our core symbol for a few reasons: </p>
                    <p>Lotus ends in the word “us,” emphasizing the social nature of the platform.</p>
                    <p>In eastern religions, the lotus flower represents rebirth and enlightenment, which is what we aim to do to with music sharing.</p>
                    <p>As a water dwelling flower, the lotus can compliment a stream, similar to how we compliment streaming services.</p>
                    <p>Despite only growing in the mud, the lotus flower blooms into something beautiful, representing how we will continue to grow despite any challenges that come our way.</p>
                </div>

                <div id="theTeam">
                    <span id="theTeamHeader">The Team</span>
                </div>

            </div>
        )
    }    
}

export default About;

