import React, { Component } from 'react';

import './css/Work.css';

class Work extends Component {
    render() {
      return (
        <div id="work" className="work-container">
            <div className="row">
                <p className="sub-title slate">My Work</p>
                <p className="statement gunmetal">Here's a couple of my recent projects. If you'd like to see more please get in touch.</p> 
            </div>
            <section className="project-showcase">
                <p>Detail Connect</p>
            </section>
            <section className="testimonial-quote">
                <p>Quote section</p>
            </section>
            <section className="project-showcase">
                <p>Augusta Rise</p>
            </section>
        </div>
      );
    }
  }
  
  export default Work;