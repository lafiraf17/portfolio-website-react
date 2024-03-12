import React from 'react';
import './intro.css';
import bg from '../../assets/images.jpg';
import {Link} from 'react-scroll';


const intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
            <span className='hello'>Hello!</span>
                <span className='introText'>I'm <span className='introName'>Lafira</span><br />Website Designer</span>
                <p className='introPara'>I am a beginer web designer and an quick learner in creating visually appealing and user friendly websites.</p>
                <Link><button className="btn">Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className='bg'/>
        </section>
        )
    }
      
    export default intro;