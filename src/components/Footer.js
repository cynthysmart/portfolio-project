import React from "react";
import insta from "../images/insta.png";
import linkedinicon from "../images/linkedinicon.png";
import twitterlogo from "../images/twitterlogo.png";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div>
                    <ul className="footer-list text-center">
                        <a><li>Product</li></a>
                        <a><li>Features</li></a>
                        <a><li>Resources</li></a>
                        <a><li className="fw-bold">CYNTHYSMART</li></a>
                        <a><li>About</li></a>
                        <a><li>Blog</li></a>
                        <a><li>Support</li></a>
                    </ul>
                </div>
                <hr className="horizontal-line"></hr>
                <div className="footer-icon image-fluid">
                    <a><img src={twitterlogo} alt="twitter icon" className="minicon"></img></a>
                    <a><img src={insta} alt="instagram icon" className="minicon"></img></a>
                    <a><img src={linkedinicon} alt="linkedin icon" className="minicon"></img></a>       
                </div>
                <span className="copyright text-center">&copy; Privacy - Terms</span>
            </div>
        </div>
    )
}

export default Footer
