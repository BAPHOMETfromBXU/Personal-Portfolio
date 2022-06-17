import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
      <h2> Contact Me </h2>
      </div>
      <div className="socialMedia">
      <a href="https://www.facebook.com/Frankirico.ph"><FacebookIcon /></a>
      <a href="https://www.instagram.com/baphometfrombxu/"><InstagramIcon /></a>
      <a href="https://twitter.com/BAPHOMETfromBXU/"><TwitterIcon /></a>
        
        
      </div>
      <p> &copy; 2022 Frankirico.ph</p>
    </div>
  );
}

export default Footer;
