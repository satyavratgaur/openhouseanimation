import React from 'react'
import { Facebook, Instagram, YouTube, LinkedIn, WhatsApp, Email } from "@material-ui/icons";
import "./Header.css";
import { Button } from '@material-ui/core';

function Header() {
  return (
    <div>
      <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarIconContainer">
          <WhatsApp />
          <span className="whatsApplogo">+91 78980 89457 </span>
        </div>
        <div className="topbarIconContainer">
          <Email />
          <span className="whatsApplogo" onclick="location.href='www.openhouseanimation.com'">www.openhouseanimation.com </span>
        </div>
        <div className="topRight">
        <div className="topbarIconContainer">
        <button className="applyNowBtn" onclick="location.href='apply-now-page.html'" type="button">Apply Now</button>
          </div>
          <div className="topbarIconContainer">
            <Facebook />
          </div>
          <div className="topbarIconContainer">
            <Instagram />
          </div>
          <div className="topbarIconContainer">
            <YouTube />
          </div>
          <div className="topbarIconContainer">
            <LinkedIn />
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
