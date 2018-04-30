import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header'
import Intro from './components/Intro'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
