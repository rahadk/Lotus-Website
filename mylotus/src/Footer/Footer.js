import React from 'react';
import './Footer.css';


class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer id="mainFooter">
                    <ul>
                        <li><a href="#privacy"><span id="privacyPolicySpan">PRIVACY POLICY</span></a>  <a href="#terms"><span>TERMS OF SERVICE</span></a></li>
                        <li id="copyrightLI">COPYRIGHT &#169; 2020 LOTUS MULTIMEDIA, INC.</li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Footer;