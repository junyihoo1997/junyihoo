import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

// Styling Import
import './Navbar.scss'


function Navbar(props) {
    const [navClick, setNavClick] = useState(true);
    const toggleTrueFalse = () => setNavClick(!navClick);
    const [navContent, setNavContent] = useState({
        logo: "HOO JUN YI",
        about: "< ABOUT />",
        skills: "< SKILLS />",
        experiences: "< EXPERIENCES />",
        education: "< EDUCATION />",
        contact: "< CONTACT />"
    })

    return (
        <div className="navbar-body">
            {/* <ul className="nav-ul">
                <li className="nav-li"><a href='#about-section' data-text="About" className="nav-a">{navContent.about}</a></li>
                <li className="nav-li"><a href='#skills-section' data-text="Skills" className="nav-a">{navContent.skills}</a></li>
                <li className="nav-li"><a href='#experiences-section' data-text="Experiences" className="nav-a">{navContent.experiences}</a></li>
                <li className="nav-li"><a href='#education-section' data-text="Education" className="nav-a">{navContent.education}</a></li>
                <li className="nav-li"><a href='#contact-section' data-text="Contact" className="nav-a">{navContent.contact}</a></li>
            </ul> */}
            <nav class="navbar transparent  navbar-expand-lg ">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li className="nav-li"><a href='#about-section' data-text="About" className="nav-a">{navContent.about}</a></li>
                <li className="nav-li"><a href='#skills-section' data-text="Skills" className="nav-a">{navContent.skills}</a></li>
                <li className="nav-li"><a href='#experiences-section' data-text="Experiences" className="nav-a">{navContent.experiences}</a></li>
                <li className="nav-li"><a href='#education-section' data-text="Education" className="nav-a">{navContent.education}</a></li>
                <li className="nav-li"><a href='#contact-section' data-text="Contact" className="nav-a">{navContent.contact}</a></li>
                        {/* <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;