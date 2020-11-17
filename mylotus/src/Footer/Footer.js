import React from 'react';
import './Footer.css';


class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer id="mainFooter">
                    <ul>
                        <li><a href="https://drive.google.com/file/d/1Ynn2AryaM-tjkPKPRsU9vBrlQuEyYjhI/view?usp=sharing"><span id="privacyPolicySpan">PRIVACY POLICY</span></a>  <a href="https://drive.google.com/file/d/1nCaYxSeroa3RHcBxYdzOHL_z88VhFxN6/view?usp=sharing"><span>TERMS OF SERVICE</span></a></li>
                        <li id="copyrightLI">COPYRIGHT &#169; 2020 LOTUS MULTIMEDIA, INC.</li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Footer;