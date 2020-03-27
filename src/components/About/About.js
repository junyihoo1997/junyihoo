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
                {/* <div className='about-title'>
                    <Row>
                        <Col sm={12}>
                            <h2>
                                About Me
                            </h2>
                        </Col>
                    </Row>
                </div> */}
                <div className='about-content '>
                    <Row>
                        <Col sm={4}><div className="about-header"><h2> About Me </h2></div><br />I'm a passionate web developer who have strong interest in programming and never stop loving new technology.  I'm a self learn, hardworking and have great desire to learn.</Col>
                        <Col sm={4}></Col>
                        <Col sm={4}><div className='about-imgBox'><Image src={junyiPic} className='about-pic' /></div></Col>
                    </Row>
                </div>
            </div>

        </div>
    );
}

export default About;