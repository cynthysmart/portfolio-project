import React from "react";
import cynthia from "../images/cynthia.jpg";
import './Home.css';


const Home = () => {
    return (
        <div>
             <section id="home" class="intro-section">
                <div className="container">
                    <div className="row align-item-center">
                        <div className="col-md-6 intros">
                            <div className="display-1">
                                <h1 className="display-1--intro">Hey!, <br></br>I'm Nnolum Cynthia</h1>
                                <p className="display-1--description lh-base">I'm a frontend web developer</p>
                            </div>
                            <button type="button" className="rounded-pill btn-rounded">Get in Touch
                                <span>
                                <i className="fas fa-arrow-right"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="col-md-6 intros text-end home-image">
                        <img src={cynthia} alt="blood bank" className="image-fluid"></img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
