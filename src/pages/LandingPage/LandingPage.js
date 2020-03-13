import React, { Component } from 'react';

// Component import
import Main from '../../components/Main/Main'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Experiences from '../../components/Experiences/Experiences'
import Education from '../../components/Education/Education'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavClicked: false
        };
        this.navClicked = this.navClicked.bind(this);
    }
    navClicked() {
        this.setState({
            isNavClicked: true
        })
    }
    render() {
        if (this.state.isNavClicked === true) {
            return (
                <div className="landing-body">
                    <Navbar />
                </div>
            );
        }
        else {
            return (
                <div className="landing-body">
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
}

export default LandingPage;