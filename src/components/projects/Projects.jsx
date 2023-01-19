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
                
                <a href="" target="_blank" className="link">
                <div className='single_project'>
                <img src={GameOne} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <h3 className='description_title'>Restoration of Eldya</h3>
                    <h4 className='skills'>
                        Description
                    </h4>
                </div>
                </div>
                </a>

                <a href="" target="_blank" className="link">
                <div className='single_project'>
                <img src={GameTwo} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <h3 className='description_title'>Roll-A-Ball</h3>
                    <h4 className='skills'>
                        Description
                    </h4>
                </div>
                </div>
                </a>
            </div>
            
            <h2 className="dev_type">Web Dev</h2>
            <div className="project_grid">
                <a href="" target="_blank" className="link">
                <div className='single_project'>
                <img src={WebOne} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <h3 className='description_title'>My Personal Website</h3>
                    <h4 className='skills'>
                        Description
                    </h4>
                </div>
                </div>
                </a>

                <a href="" target="_blank" className="link">
                <div className='single_project'>
                <img src={WebThree} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <h3 className='description_title'>iFashion Store Admin App</h3>
                    <h4 className='skills'>
                        Description
                    </h4>
                </div>
                </div>
                </a>
            </div>

            <h2 className="dev_type">Data Science</h2>

            <div className="project_grid">
                
                <a href="" target="_blank" className="link">
                <div className='single_project'>
                <img src={DataOne} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <h3 className='description_title'>Microsoft Stock Price Predictor</h3>
                    <h4 className='skills'>
                        Description
                    </h4>
                </div>
                </div>
                </a>

                <a href="" target="_blank" className="link">
                <div className='single_project'>
                <img src={DataTwo} alt="" className="game_dev_projects" />
                <div className="overlay">
                    <h3 className='description_title'>Premier League Game Result Predictor</h3>
                    <h4 className='skills'>
                        Description
                    </h4>
                </div>
                </div>
                </a>
            </div>

        </section>
    )
}

export default Projects