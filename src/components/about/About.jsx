import React from 'react';   
import "./about.css";
import Image from "../../assets/me_playing_fball.png";
import AboutBox from "./AboutBox";
import CV from "../../assets/James_Morales_Resume.pdf"

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section_title">About Me</h2>

            <div className="about_containter grid">
                <a href='https://windsorstar.com/sports/football/aigles-take-third-straight-football-title-while-knights-make-it-back-to-back-wins' target='_blank' className='about_image'>
                <img src={Image} alt=""/>
                </a>

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description"> 
                            I’m James, a full-stack software engineering student pursuing Bachelor degree's in Software Engineering and Business Administration from Western University & Ivey Business School. <br></br>With hands-on experience at companies like <b>Zynga</b>, <b>Ontario Health</b>, and <b>Flowmatic</b>, I specialize in building scalable, high-performance web applications using React, Node.js, Python, Typescript and cloud technologies like AWS & GCP.
                            From architecting data pipelines and optimizing backend APIs to developing intuitive frontends, I take a product-driven approach to engineering, ensuring seamless user experiences and efficient system design. <br></br>My recent work includes deploying real-time analytics tools, automating CI/CD pipelines, and leading full-stack development for B2B SaaS solutions.
                            <br></br>Whether it's integrating complex systems or crafting elegant UIs, I aim to bridge business needs with technical innovation.<br></br>
                            Let’s connect! 🚀
                        </p>
                        <a href={CV} download="James_Morales_CV" className="btn">Download My CV</a>
                    </div>

                    <div className="about_skills grid">
                        
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Data Science</h3>
                                <span className="skills_number">50%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Full Stack Dev</h3>
                                <span className="skills_number">90%</span>
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
                        <div>
                            <h3>Current Working Project</h3>
                            I’m currently building a personal finance dashboard, combining my passion for business and software engineering to alleviate financial pain points through automation and data insights. 
                            I aim to integrate AI-powered analytics to provide intelligent budgeting, spending insights, and financial forecasting, helping users make smarter financial decisions. 
                            This project allows me to apply my full-stack expertise while diving deeper into AI-driven automation and data intelligence.
                        </div>
                        <div>
                            <h3>Personal Interests</h3>
                            Outside of coding, I enjoy playing soccer, coaching, and exploring how AI can enhance business workflows.
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About