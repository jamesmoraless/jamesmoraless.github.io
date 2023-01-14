import React from 'react';   
import "./about.css";
import Image from "../../assets/avatar-2.svg";//Must change avatar-2
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section_title">About Me</h2>

            <div className="about_containter grid">
                <img src={Image} alt="" className="about_img" />

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">
                        I am James Morales, a software engineering student from London, Canada. 
                        I have experience in x, x, x, and x, also I'm good at business funds.
                        </p>
                        <a href="" className="btn">Download My CV</a>
                    </div>

                    <div className="about_skills grid">
                        
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Development</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">UI/UX</h3>
                                <span className="skills_number">60%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage ui_design"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Photography</h3>
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