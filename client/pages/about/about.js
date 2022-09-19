import React from "react";
import { Button } from "react-bootstrap";
import "./about.css";
// import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
//import {Typography} from "@material-ui/core";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/priyyyank";
  };
  return (
    <div className="aboutSection">
      <div></div>
       <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
         <h1>About Us</h1> 
        <div>
          <div>
            <img
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/djrfgt7gi/image/upload/v1660988810/sample.jpg"
              alt="Founder"
            />
            <h3>Priyank Sinha</h3>
           
            <Button onClick={visitInstagram} variant="secondary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Priyyank
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2>Our Brands</h2>
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              <h3>Youtube</h3>
            </a>

            <a href="https://instagram.com/priyyyank" target="blank">
            <h3>Instagram</h3>
            </a> 
          </div> 
        </div>
      </div> 
    </div>
  );
};

export default About;
