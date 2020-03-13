import React, { useState, useEffect } from 'react';
import './Navbar.scss'

function Navbar(props) {
    const [navClick, setNavClick] = useState(true);
    const toggleTrueFalse = () => setNavClick(!navClick);

    if(navClick===true){
        return (
            <div className="navbar-body">
                <ul className="nav-ul">
                <li className="nav-li"><a href='#main-section' data-text="Main" className="nav-a">Main</a></li>
                <li className="nav-li"><a href='#about-section' data-text="About" className="nav-a">About</a></li>
                <li className="nav-li"><a href='#skills-section' data-text="Skills" className="nav-a">Skills</a></li>
                <li className="nav-li"><a href='#experiences-section' data-text="Experiences" className="nav-a">Experiences</a></li>
                <li className="nav-li"><a href='#education-section' data-text="Education" className="nav-a">Education</a></li>
                <li className="nav-li"><a href='#contact-section' data-text="Contact" className="nav-a">Contact</a></li>
                </ul>
            </div>
        );
    }
   
}

export default Navbar;