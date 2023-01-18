import React from 'react';   
import  "./projects.css";
import GameOne from "../../assets/restoration_of_Eldya_pt2.PNG" 
import GameTwo from "../../assets/roll_a_ball.png"
import GameThree from "../../assets/space_shooter.png"
import WebOne from "../../assets/my_website.PNG"
import WebTwo from "../../assets/wine_schedule.PNG"
import WebThree from "../../assets/new_product_catalogued.PNG"
import DataOne from "../../assets/stock_predictor.PNG"
import DataTwo from "../../assets/PL_predictor_summary.PNG"
import DataThree from "../../assets/coming_soon.PNG"


const Projects = () => {
    return (
        <section className="projects container section" id='projects'>
            <h2 className="section_title">My Projects</h2>
            <h3 className="game_dev">Game Dev</h3>
            <div className="project_grid">
                <img src={GameOne} alt="" className="game_dev_projects" />
                <img src={GameTwo} alt="" className="game_dev_projects" />
                <img src={GameThree} alt="" className="game_dev_projects" />
            </div>
            
            <h3 className="Web_dev">Web Dev</h3>
            <div className="project_grid">
                <img src={WebOne} alt="" className="game_dev_projects" />
                <img src={WebTwo} alt="" className="game_dev_projects" />
                <img src={WebThree} alt="" className="game_dev_projects" />
            </div>

            <h3 className="Web_dev">Data Science</h3>

            <div className="project_grid">
                <img src={DataOne} alt="" className="game_dev_projects" />
                <img src={DataTwo} alt="" className="game_dev_projects" />
                <img src={DataThree} alt="" className="game_dev_projects" />
            </div>



        </section>
    )
}

export default Projects