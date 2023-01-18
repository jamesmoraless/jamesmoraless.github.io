import React from 'react';   
import  "./music.css";

const Music = () => {
    return (
        <section className="more container section" id='music'>
            <h2 className="section_title">What I Listen To</h2>
            <iframe src="https://open.spotify.com/embed/playlist/7efziCcJHXFXcNrG2ApGxm?utm_source=generator&theme=0" className='music_frame'></iframe>


        </section>
    )
}

export default Music