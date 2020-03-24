import React from 'react';
import './About.scss'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Image Import
import junyiPic from '../../pictures/JunyiPic.jpg';

function About(props) {
    return (
        <div className='about-body' id='about-section'>
            <div className='about-div'>
                <div className='about-title'>
                    <h2>
                        About Myself
                    </h2>
                </div>
                <div className='about-content container'>
                    <Row>
                       <Col>I'm a passionate web developer who have strong interest in programming and never stop loving new technology.  I'm a self learn, hardworking and have great desire to learn.</Col>
                       <Col><Image src={junyiPic} className='about-pic'/></Col> 
                    </Row>
                </div>
            </div>

        </div>
    );
}

export default About;