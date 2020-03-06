import React, { useState, useEffect } from 'react';
import './Navbar.scss'

function Navbar(props) {

    return (
        <div className="navbar-body">
            <a href='#main-section'>Main</a>
            <a href='#about-section'>About</a>
            <a href='#skills-section'>Skills</a>
            <a href='#experiences-section'>Experiences</a>
            <a href='#education-section'>Education</a>
            <a href='#contact-section'>Contact</a>
        </div>
    );
}

export default Navbar;