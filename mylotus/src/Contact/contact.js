import React from 'react';
import './contact.css';
import { Link } from "react-router-dom";



const contact = () => {
    return(
        <div id="Contact">
  


  <h1><i>  Experience Everything </i></h1>
  <div className="bkgrnd">
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