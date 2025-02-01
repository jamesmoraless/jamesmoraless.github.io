import React from 'react';   
import  "./projects.css";
import GameOne from "../../assets/restoration_of_Eldya_pt2.PNG" 
import GameTwo from "../../assets/roll_a_ball.png"
import WebOne from "../../assets/Cheer-app.png"
import WebTwo from "../../assets/LTD-img.png"
import WebThree from "../../assets/HeroHub.png"
import WebFour from "../../assets/URLShortener.png" 

import DataOne from "../../assets/stock_predictor.PNG"
import DataTwo from "../../assets/PL_predictor_summary.PNG"


const Projects = () => {
    return (
        <section className="projects container section" id='projects'>
            <h2 className="section_title">Personal Projects</h2>

            <h2 className="dev_type">Full Stack Engineering</h2>
            <div className="project_grid">
                <div className='single_project'>
                <img src={WebOne} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://www.youtube.com/watch?v=vwu5KqiraI4" target="_blank">
                    <h3 className='description_title'>Cheer Web App</h3>
                    <h4 className='skills'>
                    A MERN stack accessibility-focused platform built for a disability care facility, empowering staff with event scheduling, payroll access, and real-time communication, while enhancing digital independence for individuals with disabilities. Deployed on GCP, featuring Socket.io for live updates and AI-driven text-to-speech for accessibility. (Private Repo)<br></br><i>View YouTube Demo</i>
                    </h4>
                    </a>
                </div>
                </div>

                <div className='single_project'>
                <img src={WebTwo} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://www.youtube.com/watch?v=cd3fIOiDZpY" target="_blank"> 
                    <h3 className='description_title'>London Transit Delays - Capstone</h3>
                    <h4 className='skills'>
                    Powered by the MERN stack. A real-time transit congestion analysis dashboard leveraging web scraping, public API's, data pipelines, machine learning and visualization to predict bus delays across London, Ontario. Collaborated with PhD students and currently used by Dr.Tang at Western University to enhance urban mobility research. (Private Repo) <br></br><i>YouTube Walkthrough</i>
                    </h4>
                    </a>
                </div>
                </div>
            </div>

            <div className="project_grid">
                <div className='single_project'>
                <img src={WebThree} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://github.com/jamesmoraless/Hero-Hub-PERN-Stack" target="_blank">
                    <h3 className='description_title'>Hero Hub</h3>
                    <h4 className='skills'>
                    Hero Hub, powered by the PERN stack (PostgreSQL, Express, React, Node), delivers a responsive platform for superhero fans to explore and review characters. Deployed on AWS EC2, it showcases full-stack development, database optimization, and cloud deployment expertise.<br></br><i>View Github</i>
                    </h4>
                    </a>
                </div>
                </div>

                <div className='single_project'>
                <img src={WebFour} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://github.com/jamesmoraless/URL-Shortener" target="_blank"> 
                    <h3 className='description_title'>Full Stack URL Shortener</h3>
                    <h4 className='skills'>
                    URL management tool, powered by the PERN stack (PostgreSQL, Express, React, Node), featuring secure user authentication through JWT, URL tracking/redirection, and analytics. Provides a seamless experience for accessing, managing and monitoring shortened links.<br></br><i>View Github</i>
                    </h4>
                    </a>
                </div>
                </div>
            </div>


            <h2 className="dev_type">Game Dev</h2>
            <div className="project_grid">
                
                <div className='single_project'>
                <img src={GameOne} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://github.com/jamesmoraless/RestorationsOfEldya" target="_blank">
                    <h3 className='description_title'>Restoration of Eldya</h3>
                    <h4 className='skills'>
                        In a team of 4 software engineering students, we built a role-playing-game on the Unity engine with C#. This game includes 3 main characters with 2 levels and a variety of enemies. After 3 software development sprints, we recieved a 96%. <br></br><i>View Github</i>
                    </h4>
                    </a>
                </div>
                </div>
             

                <div className='single_project'>
                <img src={GameTwo} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://github.com/jamesmoraless/Roll-A-Ball" target="_blank">
                    <h3 className='description_title'>Roll-A-Ball</h3>
                    <h4 className='skills'>
                        I built this roll-a-ball game using Unity game engine and C#. A simple yet fun 3D project where you control a ball down a path of obstacles with floating collectables. After making it to the end, you are prompted with a end of game message and a final score. <br></br><i>View Github</i>
                    </h4>
                    </a>
                </div>
                </div>
            </div>

            <h2 className="dev_type">Data Science & Machine Learning</h2>

            <div className="project_grid">
                
                <div className='single_project'>
                <img src={DataOne} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://github.com/jamesmoraless/Python-Stock-Price-Predictor" target="_blank">
                    <h3 className='description_title'>Microsoft Stock Price Predictor</h3>
                    <h4 className='skills'>
                        This program uses an artificial recurrent neural networlk called Long Short Term Memory (LSTM) to predit a closing stock price of a corporation (Microsoft). I used Python, Pandas, Tensorflow and Google Colab. <br></br><i>View Github</i>
                    </h4>
                    </a>
                </div>
                </div>

                <div className='single_project'>
                <img src={DataTwo} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://github.com/jamesmoraless/Premier-League-Model" target="_blank">
                    <h3 className='description_title'>Premier League Game Result Predictor</h3>
                    <h4 className='skills'>
                        I built this using predictors to improve the accuracy of the model by splitting the matches data frame by team in order to compute rolling averages for team performance. I used Python, Pandas, Scikit-learn and Jupyter.<br></br><i>View Github</i>
                    </h4>
                    </a>
                </div>
                </div>
            </div>

        </section>
    )
}

export default Projects