import React from "react";
import bg from "../bg.jpg";
import './About.css';


const About = () => {
    return (
        <div className="about-container">
            <div className="row align-item-center">
                <div className="col-md-6 intros">
                    <img src={bg} alt="bg" className="image-fluid"></img>
                </div>

                <div className="col-md-6 intros text-end">
                    <div className="display-2">
                        <h1 className="display-2--intro">ABOUT ME</h1>
                        <p className="display-2--description lh-base">Lorem ipsum, dolor sit amet 
                        consectetur adipisicing elit. Esse quidem ducimus commodi mollitia veniam numquam 
                        iste excepturi ut dolorem recusandae optio aspernatur dignissimos consequatur, dolore 
                        ipsa! Non recusandae earum eum. Aspernatur recusandae, itaque accusamus autem rerum 
                        laborum enim nihil, aut praesentium, ipsa molestias tempora architecto hic voluptas 
                        repellat totam sint.</p>
                    </div><br></br>
                    <button type="button" className="about-btn rounded-pill btn-rounded">Get in Touch
                        <span>
                        <i className="fas fa-arrow-right"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
