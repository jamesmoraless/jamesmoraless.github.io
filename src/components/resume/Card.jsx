import React from 'react';   

const Card = (props) => {
    return (
        <div className="timeline_item">
            <i className={props.icon}></i>
            <span className="timeline_data">{props.year}</span>
            <h3 className="timeline_title">{props.title}</h3>
            <p className="timeline_text">{props.desc}</p>
        </div>
    )
}

export default Card