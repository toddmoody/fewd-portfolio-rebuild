import React, { Component } from 'react';
import Typewriter from './Typewriter';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FaChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';

import './css/Header.scss';

import ProfilePic from '../assets/profile.jpg'

class Header extends Component {
    render() {
      return (
      
            <section id="banner">
                <div className="wrapper">
                    <header>
                        <nav>
                            <a href="#">Home</a>
                            <a href="#">Portfolio</a>
                            <a href="#" className="hero-btn trans-btn">Get in touch</a>
                        </nav>
                    </header>
                    <div>
                        <img className="profile-pic" src={ProfilePic} />
                    </div>
                    <div className="dynamic-block">
                        <h1>Hi, I'm Todd. I'm a</h1>
                        <h1>Front-End UI/UX Developer. I build:</h1>
                        <Typewriter />
                    </div>
                    <div className="btn-wrapper">
                        <a href="#" className="hero-btn">I'm available for hire</a>
                    </div>
                    <div className="scroll-down">
                        <FontAwesomeIcon className="bounce arrow" size="lg" icon={FaChevronDown}/>
                    </div>
                </div>

                {/*        
                <section>
                    <img className="profile-pic" src={ProfilePic} />
                </section>
                
                <div className="dynamic-block">
                    <h1>Hi, I'm Todd. I'm a</h1>
                    <h1>Front-End Developer. I build:</h1>
                    <Typewriter /> 
                </div>
                
                <div>
                    <a href="#" className="button">I'm available for hire</a>
                </div>
                
                <div className="scroll-down">
                    <FontAwesomeIcon className="bounce arrow" size="lg" icon={FaChevronDown}/>
                </div>
                */}
                

            </section>



      );
    }
  }
  
  export default Header;