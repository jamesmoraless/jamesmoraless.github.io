import React from 'react';   
import  "./skills.css";
import HTMLImg from "../../assets/icons8-html-5-96.png";
import CSSImg from "../../assets/icons8-css3-96.png";
import JavaScriptImg from "../../assets/icons8-javascript-96.png";
import JavaImg from "../../assets/icons8-java-96.png";
import CImg from "../../assets/icons8-c-sharp-logo-96.png";
import PythonImg from "../../assets/icons8-python-96.png";
import TypeScriptImg from "../../assets/icons8-typescript-96.png";
import SQLImg from "../../assets/icons8-sql-96.png";
import FlaskImg from "../../assets/icons8-flask-96.png";
import ExpressImg from "../../assets/icons8-express-js-90.png";
import ReactImg from "../../assets/icons8-react-96.png";
import NodeImg from "../../assets/icons8-nodejs-96.png";



import PostGreImg from "../../assets/icons8-postgresql-96.png";
import MySQLImg from "../../assets/icons8-mysql-logo-96.png";
import MongoImg from "../../assets/icons8-mongodb-96.png";
import AwsImg from "../../assets/icons8-aws-96.png";
import GoogleImg from "../../assets/icons8-google-cloud-96.png";
import DockerImg from "../../assets/icons8-docker-96.png";
import KubernetesImg from "../../assets/icons8-kubernetes-96.png";
import TerraformImg from "../../assets/icons8-terraform-96.png";

import UnityImg from "../../assets/icons8-unity-96.png";
import GitImg from "../../assets/icons8-git-96.png";
import GithubImg from "../../assets/icons8-github-96.png";
import JenkinsImg from "../../assets/icons8-jenkins-96.png";
import JiraImg from "../../assets/icons8-jira-96.png";
import AzureImg from "../../assets/icons8-azure-96.png";
import JestImg from "../../assets/icons8-jest-can-collect-code-coverage-information-from-entire-projects-96.png";
import PostmanImg from "../../assets/icons8-postman-is-the-only-complete-api-development-environment-96 (1).png";
import SplunkImg from "../../assets/icons8-splunk-96.png";





const Skills = () => {
    return (
        
        <section className="skill container section" id='skills'>
            <div className="skills_container">
            <h2 className="section_title">My Developer Toolbox</h2>
            
            <div className="tech_title">
                <h2>Languages & Frameworks</h2>
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
                <img src={PythonImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={TypeScriptImg} alt="" className="skill_img" />
                </div>
            </div>
            <div className="image_grid">
                <div className="single skill">
                <img src={CImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={SQLImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={ReactImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={NodeImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={FlaskImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={ExpressImg} alt="" className="skill_img" />
                </div>
                
            </div>



            <div className="tech_title">
                <h2>Databases, Cloud & DevOps</h2>
            </div>
            <div className="image_grid_two">
                <div className="single skill">
                <img src={PostGreImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={MySQLImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={MongoImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={AwsImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={GoogleImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={DockerImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={KubernetesImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={TerraformImg} alt="" className="skill_img" />
                </div>
            </div>
            <div className="tech_title">
                <h2>Tools & Workflows</h2>
            </div>
            <div className="image_grid_two">
                <div className="single skill">
                <img src={GitImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={GithubImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={JenkinsImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={JiraImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={AzureImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={JestImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={PostmanImg} alt="" className="skill_img" />
                </div>
                <div className="single skill">
                <img src={SplunkImg} alt="" className="skill_img" />
                </div>

            </div>


            
            </div>
        </section>
    )
}

export default Skills