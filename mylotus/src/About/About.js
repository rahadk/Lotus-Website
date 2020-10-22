import React from 'react'
import {Container, Image} from 'react-bootstrap';
import './About.css'
import { Link } from "react-router-dom";
const flower =  require("../images/nav-lotus-flower.png");


class About extends React.Component{
    render(){
        return(

            <div id="About-section">
                <Container fluid id="About-Lotus">
                    <h1>About Lotus</h1>
                    <Image id="Top-Flower" src={flower}></Image>
                </Container>

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