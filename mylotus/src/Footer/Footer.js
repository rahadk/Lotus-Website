import React from 'react';
import './Footer.css';


class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer id="mainFooter">
                    <ul>
                        <li><a href="https://drive.google.com/file/d/1TBpEL1aB0SEouHYXj2q7qNpl839MqBdG/view?usp=sharing"><span id="privacyPolicySpan">PRIVACY POLICY</span></a>  <a href="https://drive.google.com/file/d/1vWe9MYjQOn8i5-Sc_Z77LiZXAnHoAU3l/view?usp=sharing"><span>TERMS OF SERVICE</span></a></li>
                        <li id="copyrightLI">COPYRIGHT &#169; 2020 LOTUS MULTIMEDIA, INC.</li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Footer;