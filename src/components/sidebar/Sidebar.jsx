import React from 'react';   
import "./sidebar.css";
import Logo from "../../assets/j-low-resolution-logo-color-on-transparent-background.png"//have to change the logo.svg to my own

const Sidebar = () => {
    return (
        <>
        <aside className='aside'>
            <a href="#home" className="nav_logo">
                <img src={Logo} className="my_Logo" alt="Logo"/>
            </a>

            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="icon-home"><span className='description'>Home</span></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                            <i className="icon-user-following"><span className='description'>About</span></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                            <i className="icon-wrench"><span className='description'>Tools</span></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#resume" className="nav_link">
                            <i className="icon-briefcase"><span className="description">Experience</span></i>
                            </a>
                        </li>
                        
                        <li className="nav_item">
                            <a href="#projects" className="nav_link">
                            <i className="icon-grid"><span className="description">Projects</span></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#music" className="nav_link">
                            <i className="icon-music-tone-alt"><span className="description">Music</span></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                            <i className="icon-bubble"><span className="description">Contact</span></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            <div className="nav_footer">
                <span className="copyright">&copy; 2022 - 2023.</span>
            </div>
        </aside>

        <div className="nav_toggle">
            <i className="icon-menu"></i>
        </div>
        </>
    )
}

export default Sidebar