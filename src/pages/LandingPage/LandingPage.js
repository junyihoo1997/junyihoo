import React, { Component } from 'react';

// Component import
import Navbar from '../../components/Navbar/Navbar'
import Main from '../../components/Main/Main'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Experiences from '../../components/Experiences/Experiences'
import Education from '../../components/Education/Education'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-body">
                <Navbar />
                <Main />
                <About />
                <Skills />
                <Experiences />
                <Education />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default LandingPage;