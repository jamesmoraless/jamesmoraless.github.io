import React from 'react';   
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact container section" id='contact'>
            <h2 className="section_title">Get In Touch</h2>

            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Lets talk about everything!</h3>
                    <p className="contact_details">Don't like forms? Send me an email. :)</p>
                </div>

                <form action="https://formsubmit.co/jamesmoraless18@gmail.com" method="POST" className="contact_form">

                    <div className="contact_form-group">
                        <div className="contact_form-div">
                            <input type="text" className="contact_form-input" name="name" class="form-control" placeholder='Insert your name' required/>
                        </div>

                        <div className="contact_form-div">
                            <input type="email" className="contact_form-input" class="form-control" name="email" placeholder='Insert your email'required/>
                        </div>
                    </div>
                    <div className="contact_form-div">
                            <input type="text" className="contact_form-input" placeholder='Insert your subject'/>
                        </div>
                        <div className="contact_form-div contact_form-area">
                            <textarea name="message" id="" cols="30" rows="10" class="form-control" className='contact_form-input' placeholder='Write your message here' required></textarea>
                        </div>

                        <button className='btn'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact