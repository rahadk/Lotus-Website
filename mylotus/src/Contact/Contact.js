import React from 'react';
import './Contact.css';
import {Form} from 'react-bootstrap'

class Contact extends React.Component<>{
    render(){
        return(
            <div id="contact">
                <h1 id="contactUsHeader">Contact Us</h1>
                <Form name="contact"  data-netlify="true" method="POST">
                    <input type="hidden" name="form-name" value="contact" />

                    <Form.Group>
                        <Form.Label>What's your name?</Form.Label>
                        <Form.Control as="input" type="text" name="name" required></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>What's your Email?</Form.Label>
                        <Form.Control as="input" name="email" type="email" required></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control as="input" type="text" name="email" required ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" type="text" name="message"></Form.Control>
                    </Form.Group>

                    <button className="submit" type="submit"><b>SUBMIT</b></button>
                </Form>
            </div>
        )
    }
};

export default Contact;