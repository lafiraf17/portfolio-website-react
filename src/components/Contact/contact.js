import React from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook.png';


const contact = () => {
    return (
        <section id="contactPage">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to dicuss any work opportunities</span>
            <form className="contactform">
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows='5'placeholder='Your Message'></textarea>
                <div className="submit">
                <button type ="submit" value='Send' className='submitBtn'>Submit</button>
                </div>
                <div className='links'>
                <img src={FacebookIcon} alt="Facebook" className='link'/>
                
                </div>
            </form>
        </section>
        );
    }
      
    export default contact;
