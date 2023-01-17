import React from 'react';   
import "./about.css";
import Image from "../../assets/avatar-2.svg";//Must change avatar-2
import AboutBox from "./AboutBox";
import CV from "../../assets/Morales_James_Resume - Copy.pdf"

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section_title">About Me</h2>

            <div className="about_containter grid">
                <img src={Image} alt="" className="about_img" />

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description"> 
                        I am a third-year Software Engineering and Ivey Business student at the University of Western Ontario. 
                        I am interested and knowledgeable in computer science fundamentals such as object-oriented design, algorithm design and data structures. 
                        I am comfortable with finance, accounting and management fundamentals.
                        I strive to become a well-rounded software engineer and hope that you enjoy my website!
                        </p>
                        <a href={CV} download="James_Morales_CV" className="btn">Download My CV</a>
                    </div>

                    <div className="about_skills grid">
                        
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Data Science</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Web Dev</h3>
                                <span className="skills_number">50%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage ui_design"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Game Dev</h3>
                                <span className="skills_number">60%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage photography"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About