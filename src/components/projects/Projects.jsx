import React from 'react';   
import  "./projects.css";
import GameOne from "../../assets/restoration_of_Eldya_pt2.PNG" 
import GameTwo from "../../assets/roll_a_ball.png"
import WebOne from "../../assets/my_website.PNG"
import WebThree from "../../assets/new_product_catalogued.PNG"
import DataOne from "../../assets/stock_predictor.PNG"
import DataTwo from "../../assets/PL_predictor_summary.PNG"


const Projects = () => {
    return (
        <section className="projects container section" id='projects'>
            <h2 className="section_title">My Projects</h2>
            <h2 className="dev_type">Game Dev</h2>
            <div className="project_grid">
                
                <div className='single_project'>
                <img src={GameOne} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://github.com/jamesmoraless/RestorationsOfEldya" target="_blank">
                    <h3 className='description_title'>Restoration of Eldya</h3>
                    <h4 className='skills'>
                        In a team of 4 software engineering students, we built a role-playing-game on the Unity engine with C#. This game includes 3 main characters with 2 levels and a variety of enemies. After 3 software development sprints, we recieved a 96%. <br></br><i>Click Me</i>
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
                        I built this roll-a-ball game using Unity game engine and C#. A simple yet fun 3D project where you control a ball down a path of obstacles with floating collectables. After making it to the end, you are prompted with a end of game message and a final score. <br></br><i>Click Me</i>
                    </h4>
                    </a>
                </div>
                </div>
            </div>
            
            <h2 className="dev_type">Web Dev</h2>
            <div className="project_grid">
                <div className='single_project'>
                <img src={WebOne} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://github.com/jamesmoraless/jamesmoraless.github.io" target="_blank">
                    <h3 className='description_title'>My Personal Website</h3>
                    <h4 className='skills'>
                        Description
                    </h4>
                    </a>
                </div>
                </div>

                <div className='single_project'>
                <img src={WebThree} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://github.com/jamesmoraless/iFashion-Admin-Web-App" target="_blank"> 
                    <h3 className='description_title'>iFashion Store Admin App</h3>
                    <h4 className='skills'>
                        Description
                    </h4>
                    </a>
                </div>
                </div>
            </div>

            <h2 className="dev_type">Data Science</h2>

            <div className="project_grid">
                
                <div className='single_project'>
                <img src={DataOne} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <a href="https://github.com/jamesmoraless/Python-Stock-Price-Predictor" target="_blank">
                    <h3 className='description_title'>Microsoft Stock Price Predictor</h3>
                    <h4 className='skills'>
                        Description
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
                        Description
                    </h4>
                    </a>
                </div>
                </div>
            </div>

        </section>
    )
}

export default Projects