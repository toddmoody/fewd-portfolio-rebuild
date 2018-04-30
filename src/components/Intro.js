import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FaCode from '@fortawesome/fontawesome-free-solid/faCode';
import FaPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import FaComments from '@fortawesome/fontawesome-free-solid/faComments';

import './css/Intro.css';

class Intro extends Component {
    render() {
      return (
        <div id="intro" className="intro-container">
            <div className="row">
                <p className="sub-title slate">What I do</p>
                <p className="statement gunmetal">I'm passionate about Front-End Development as it's all about talking an idea and making it a highly intuitive reality — one line of code at a time! My journey into web development is a lot like how others have discovered their passion — anything but typical.</p> 
            </div>
            <div className="skills-row">
                <div className="key-skill-col">
                    <FontAwesomeIcon className="orange" size="lg" icon={FaCode}/>
                    <h4 className="skill-sub" >Code</h4>
                    <p className="skill-summary">I write code for the browser with the end user in mind. Beyond the markup and styling my core focus is JavaScript. More than just vanilla, I work with libraries like Bootstrap, jQuery and React. Plus, new tools & tech like Flexbox.</p>
                </div>
                <div className="key-skill-col">
                    <FontAwesomeIcon className="orange" size="lg" icon={FaPencil}/>
                    <h4 className="skill-sub" >UI/UX</h4>
                    <p className="skill-summary">I write code for the browser with the end user in mind. Beyond the markup and styling my core focus is JavaScript. More than just vanilla, I work with libraries like Bootstrap, jQuery and React. Plus, new tools & tech like Flexbox.</p>
                </div>
                <div className="key-skill-col">
                    <FontAwesomeIcon className="orange" size="lg" icon={FaComments}/>
                    <h4 className="skill-sub">Collaboration</h4>
                    <p className="skill-summary">I write code for the browser with the end user in mind. Beyond the markup and styling my core focus is JavaScript. More than just vanilla, I work with libraries like Bootstrap, jQuery and React. Plus, new tools & tech like Flexbox.</p>
                </div>
            </div>
        </div>


      );
    }
  }
  
  export default Intro;