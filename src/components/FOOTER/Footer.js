import React, { useState } from "react";
import "./Footer.css";
import bg_space from "../../assets/bg_space.gif";
import footermoon from "../../assets/footermoon.png";
import { AiOutlineClose , AiFillFacebook ,AiFillLinkedin , AiOutlineInstagram}  from "react-icons/ai";
import {BsDiscord} from "react-icons/bs"


const Footer = () => {
  const [reportError, setReportError] = useState(false);
  return (
    <div className="footerwrapper" style={{
        backgroundImage: `url(${bg_space})`,
        height: "110vh",
        width: "100vw",
        backgroundSize: "500px  500px",
        backgroundRepeat: "repeat",
        display: "flex",
        position: "absolute",
      }}>
      <div className="spacemyfooter">
        <div style={{ overflow: "hidden", display: "block" }}>
          <div className="footerlink1">
            <a href="" className="">
              <i className="fa fa-logo"></i>
            </a>
          </div>
          <div className="footerlink1">
            <a href="">SPACES</a>
          </div>
          <div className="footerlink1">
            <a href="">UPGRADE</a>
          </div>
          <div className="footerlink1">
            <a href="">NEWSLETTER</a>
          </div>
          <div className="footerlink1">
            <a href="">GET CERTIFIED</a>
          </div>
          <div className="footerlink1">
            <p onClick={() => setReportError(true)} style={{fontSize : "15px"}}>REPORT ERROR</p>
          </div>
        </div>

        <div className="footermoon">
          <img src={footermoon} alt="footermoon" className="imgmoon"></img>
        </div>
        {reportError && (
          <div
            style={{
              padding: "20px",
              color: "rgb(255, 244, 163)",
              backgroundColor: "rgb(83, 85, 93)",
              maxWidth: '60vw',
              fontSize: 'x-small'
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Report Error </h3>
              <AiOutlineClose
                style={{ color: "white", fontSize: "small" }}
                onClick={() => setReportError(false)}
              />
            </div>
            <div>
              <p>
                If you want to report an error, or if you want to make a
                suggestion, do not hesitate to send us an e-mail:{" "}
              </p>
            </div>
            <div>
              <p>help@w3schools.com</p>
            </div>
          </div>
        )}
        <div className="content" style={{fontFamily : "Lato , sans-serif"}}>
            <div className="tutorial">
                <h5 style={{paddingBottom : "10px" }}>Top Tutorials</h5>
                    <a>HTML Tutorial</a>
                    <a>CSS Tutorial</a>
                    <a>Javascript Tutorial</a>
                    <a>How To Tutorial</a>
                    <a>SQL Tutorial</a>
                    <a>Python Tutorial</a>
                    <a>W3.CSS Tutorial</a>
                    <a>Bootstrap Tutorial</a>
                    <a>PHP Tutorial</a>
                    <a>Java Tutorial</a>
                    <a>C++ Tutorial</a>
                    <a>jQuery Tutorial</a>
            </div>
            <div className="reference">
                <h5  style={{paddingBottom :"10px"}}>Top References</h5>
                    <a>HTML Reference</a>
                    <a>CSS Reference</a>
                    <a>Javascript Reference</a>
                    <a>SQL Reference</a>
                    <a>Python Reference</a>
                    <a>W3.CSS Reference</a>
                    <a>Bootstrap Reference</a>
                    <a>PHP Reference</a>
                    <a>Java Reference</a>
                    <a>Angular Reference</a>
                    <a>jQuery Reference</a>
            </div>
            <div className="example">
                <h5 style={{paddingBottom : "10px" }}>Top Examples</h5>
                    <a>HTML Example</a>
                    <a>CSS Example</a>
                    <a>Javascript Example</a>
                    <a>How To Example</a>
                    <a>SQL Example</a>
                    <a>Python Example</a>
                    <a>W3.CSS Example</a>
                    <a>Bootstrap Example</a>
                    <a>PHP Example</a>
                    <a>Java Example</a>
                    <a>XML Example</a>
                    <a>jQuery Example</a>
            </div>
            <div className="getcertified">
                <h5  style={{paddingBottom : "10px" }}>Get Certified</h5>
                    <a>HTML Certificate</a>
                    <a>CSS Certificate</a>
                    <a>Javascript Certificate</a>
                    <a>Front End Certificate</a>
                    <a>SQL Certificate</a>
                    <a>Python Certificate</a>
                    <a>PHP Certificate</a>
                    <a>jQuery Certificate</a>
                    <a>Java Certificate</a>
                    <a>C++ Certificate</a>
                    <a>C# Certificate</a>
                    <a>XML Certificate</a>
            </div>
        </div>
        <div className="forum" style={{color : "#ddd" }} >
            <div className="icons">
                < AiFillFacebook className="ii"/>
                <BsDiscord className="ii"/>
                <AiFillLinkedin className="ii"/>
                <AiOutlineInstagram  className="ii"/>
                <h6 style={{fontSize : "small" , marginLeft : "2px"}}>FORUM ABOUT</h6>
            </div>
            < div className="para" style={{fontSize : "x-small" , maxWidth : "50vw"}}>
                <p>W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our 
                <a href="https://www.w3schools.com/about/about_copyright.asp" style={{textDecoration : "underline"}}>terms of use</a>,
                <a href = "https://www.w3schools.com/about/about_privacy.asp" style={{textDecoration : "underline"}}> cookie and privacy policy</a>.
                </p>
                <br />
                <p><a href="https://www.w3schools.com/about/about_copyright.asp" style={{textDecoration : "underline"}}>CopyrightCopyright 1999-2023</a> by Refsnes Data. All Rights Reserved. <a href="https://www.w3schools.com/w3css/default.asp" style={{textDecoration : "underline"}}>W3Schools is Powered by W3.CSS</a>.</p>    
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
