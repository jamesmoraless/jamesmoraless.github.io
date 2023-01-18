import React from 'react';   

const AboutBox = () => {
    return (
        <div className="about_boxes grid">
            <div className="about_box">
                <i className="about_icon icon-fire"></i>
                
                <div>
                    <h3 className="about_title">20</h3>
                    <span className="about_subtitle">Projects Completed on Github</span>
                </div>
            
            </div>

            <div className="about_box">
                <i className="about_icon icon-cup"></i>
                
                <div>
                    <h3 className="about_title">5670</h3>
                    <span className="about_subtitle">Cups of Coffee</span>
                </div>
            
            </div>

            <div className="about_box">
                <i className="about_icon icon-people"></i>
                
                <div>
                    <h3 className="about_title">427</h3>
                    <span className="about_subtitle">Random</span>
                </div>
            
            </div>
        </div>
    )
}

export default AboutBox