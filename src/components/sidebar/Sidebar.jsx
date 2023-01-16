import React from 'react';   
import "./sidebar.css";
import Logo from "../../assets/j-low-resolution-logo-color-on-transparent-background.png"//have to change the logo.svg to my own

const Sidebar = () => {
    return (
        <aside className='aside'>
            <a href="#home" className="nav_logo">
                <img src={Logo} className="my_Logo" alt="Logo"/>
            </a>

            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                            <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#resume" className="nav_link">
                            <i className="icon-briefcase"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                            <i className="icon-bubble"></i>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#more" className="nav_link">
                            <i className="icon-plus"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            <div className="nav_footer">
                <span className="copyright">&copy; 2022 - 2023.</span>
            </div>
        </aside>
    )
}

export default Sidebar