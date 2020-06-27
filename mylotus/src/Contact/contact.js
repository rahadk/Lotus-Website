import React from 'react';
import './contact.css';
import { Link } from "react-router-dom";
import image from '../images/LotusTitle.png';
import img4 from '../images/Lotus.png';



const contact = () => {
    return(
        <div id="Contact">
      <nav className="navbar shadow-5">
      <div className="nav-logo-ctr">
       <Link to='/'> <img className="nav-logo" src={image} alt="This is the Lotus logo"></img></Link>
      </div>
      <ul className="navbar-ctr">
        <Link to="About"><li className="nav-itm grow"> About us </li></Link>
        <Link to="Contact"><li className="nav-itm grow"> Contact </li></Link>

      </ul>
    </nav>

            <div className="contact-ctn">
                <h2 className="contact-head"> Want to learn more about Lotus?</h2>
                <p  className="contact-text"> Feel free to send us a message! </p>
                <img className="logo" alt="img1" src={img4}></img>

            </div>

     

<div className="bkgrnd">
  <h1><i>  Experience Everything </i></h1>
    <form name="contact"  data-netlify="true" method="POST">
            <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" placeholder="Your name goes here..." name="name" required /></label>
          </p>
          <p>
            <label>Your Email: <input  placeholder="Your email goes here..."type="email" name="email" required /></label>
          </p>
          <p>
            <label>Message (optional): <textarea placeholder="Say hello..." name="message"></textarea></label>
          </p>
          <p>
            <button className="submit" type="submit">Send</button>
          </p>
        </form>
        </div>

        </div>
    )

};

export default contact;