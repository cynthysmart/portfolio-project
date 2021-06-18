import React from "react";
import logo from "../logo.png";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
            <div className="container">
                <a className="navbar-brand" href="www.google.com"><img className="logo" src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="www.google.com">About Me</a></li>
                    <li className="nav-item"><a className="nav-link" href="www.google.com">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="www.google.com">Experiences</a></li>
                    <li className="nav-item"><a className="nav-link" href="www.google.com">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="www.google.com">Contact</a></li>
                    </ul>
                    <button type="button" className="rounded-pill btn-rounded">+678 876 84
                    <span>
                        <i className="fas fa-phone-alt"></i>
                    </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
