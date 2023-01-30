import React from 'react';   
import  "./skills.css";
import HTMLImg from "../../assets/icons8-html-5-96.png";
import CSSImg from "../../assets/icons8-css3-96.png";
import JavaScriptImg from "../../assets/icons8-javascript-96.png";
import JavaImg from "../../assets/icons8-java-96.png";
import CImg from "../../assets/icons8-c-sharp-logo-96.png";
import PythonImg from "../../assets/icons8-python-96.png";
import MatLabnImg from "../../assets/icons8-matlab-96.png";

import PostGreImg from "../../assets/icons8-postgresql-96.png";
import MySQLImg from "../../assets/icons8-mysql-logo-96.png";
import ExpressImg from "../../assets/icons8-express-js-90.png";
import ReactImg from "../../assets/icons8-react-96.png";
import UnityImg from "../../assets/icons8-unity-96.png";
import NodeImg from "../../assets/icons8-nodejs-96.png";
import GitImg from "../../assets/icons8-git-96.png";




const Skills = () => {
    return (
        
        <section className="skill container section" id='skills'>
            <div className="skills_container">
            <h2 className="section_title">My Tech Tools</h2>
            
            <div className="tech_title">
                <h2>Languages</h2>
            </div>

            <div className="image_grid">
                <div className="single skill">
                <img src={HTMLImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={CSSImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={JavaScriptImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={JavaImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={CImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={PythonImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={MatLabnImg} alt="" className="skill_img" />
                </div>
            </div>


            <div className="tech_title">
                <h2>Other</h2>
            </div>
            <div className="image_grid_two">
                <div className="single skill">
                <img src={PostGreImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={MySQLImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={ExpressImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={ReactImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={UnityImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={NodeImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={GitImg} alt="" className="skill_img" />
                </div>
            </div>

            
            </div>
        </section>
    )
}

export default Skills