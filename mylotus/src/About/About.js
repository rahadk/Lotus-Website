import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap';
import './About.css'
import { Link } from "react-router-dom";
const flower =  require("../images/nav-lotus-flower.png");


class About extends React.Component{
    render(){
        return(

            <div id="About-section">
                <div fluid id="About-Lotus">
                    <h1>About Lotus</h1>
                    <Image id="Top-Flower" src={flower}>

                    </Image>
                </div>

                <div id="The-Mission">

                </div>

                <div id="The-Vision">

                </div>

                <div id="The-Story">
                    
                </div>

                <div id="The-Name">

                </div>

                <div id="The-Team">
                
                </div>

            </div>
        )
    }    
}

export default About;