import React from "react";
import { Button } from "react-bootstrap";
import "./Contact.css";


const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:priyanksinha63@gmail.com">
        <Button variant="dark">Contact: priyanksinha63@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
