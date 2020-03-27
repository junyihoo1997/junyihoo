import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


// Styling import
import './Contact.scss'

// Image import
import facebook from '../../pictures/facebook.webp';
import instagram from '../../pictures/instagram.png';
import linkedin from '../../pictures/linkedin.png';



function Contact(props) {
    return (
        <div className='contact-body' id='contact-section'>
            {/* <Row>
                <Col sm={12}>
                    <div>
                        <h2>
                            You can find me on
                        </h2>
                    </div>
                </Col>
            </Row> */}

                {/* <div>
                    <a href='https://www.facebook.com/junyi.hoo' target='_blank' ><Image src={facebook} className='contact-pic' /></a>
                </div>
                <div>
                    <a href='https://www.instagram.com/junyi_hoo/' target='_blank'><Image src={instagram} className='contact-pic' /></a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/jun-yi-hoo-268aa5184/' target='_blank'><Image src={linkedin} className='contact-pic' /></a>
                </div> */}



    
    
                <Row>
                    <Col sm={4}>
                        <div className='contact-imgBox'>
                            <a href='https://www.facebook.com/junyi.hoo' target='_blank' ><Image src={facebook} className='contact-pic'/></a>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='contact-imgBox'>
                            <a href='https://www.instagram.com/junyi_hoo/' target='_blank'><Image src={instagram} className='contact-pic' /></a>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='contact-imgBox'>
                            <a href='https://www.linkedin.com/in/jun-yi-hoo-268aa5184/' target='_blank'><Image src={linkedin} className='contact-pic' /></a>
                        </div>
                    </Col>
                </Row>
      
        </div>
    );
}

export default Contact;