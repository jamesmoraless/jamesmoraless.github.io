import React from 'react';   
import "./home.css";
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="avatar" className="home_img" />
                <h1 className="home_name">James Morales</h1>
                <span className="home_education">I'm a Third-Year Software Engineering Student</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Hire Me</a>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home