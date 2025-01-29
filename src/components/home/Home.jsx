import React from 'react';   
import "./home.css";
import Me from "../../assets/headshot_1.png"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="avatar" className="home_img" />
                <h1 className="home_name">James Morales</h1>
                <span className="home_education"><b>Welcome to my website!</b> <br></br>I'm a fifth-year Software Engineering and Business student from London, Canada. </span>

                <HeaderSocials />

                <a href="#contact" className="btn">Contact Me</a>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home