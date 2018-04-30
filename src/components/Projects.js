import React, { Component } from 'react';

import BarrettHomes from '../assets/barrett.png'

import './css/Projects.css';

class Projects extends Component {
    render() {
      return (
        <div id="projects">
            <div className="row">
                <p className="sub-title slate">More Projects</p>
                <p className="statement gunmetal">If you'd like to chat more about my projects, discuss yours, or chat side projects please get in touch.</p> 
            </div>
            <div className="projects-container">
                <div className="image-container">
                    <img className="image" src={BarrettHomes} alt="Barrett Homes" />
                </div>
                <div className="image-container">
                    <img className="image" src={BarrettHomes} alt="Barrett Homes" />
                </div>
                <div className="image-container">
                    <img className="image" src={BarrettHomes} alt="Barrett Homes" />
                </div>
                <div className="image-container">
                    <img className="image" src={BarrettHomes} alt="Barrett Homes" />
                </div>
                <div className="image-container">
                    <img className="image" src={BarrettHomes} alt="Barrett Homes" />
                </div>
                <div className="image-container">
                    <img className="image" src={BarrettHomes} alt="Barrett Homes" />
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Projects;