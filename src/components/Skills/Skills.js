import React from 'react';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Image import
import html from '../../pictures/html.png';
import css from '../../pictures/css.png'
import javascript from '../../pictures/javascript.jpg'
import c from '../../pictures/C.webp'
import java from '../../pictures/java.png'
import php from '../../pictures/php.png'
import visualBasic from '../../pictures/visualbasic.png'
import reactJs from '../../pictures/reactjs.png'
import python from '../../pictures/python.png'





// Styling import
import './Skills.scss'

function Skills(props) {
    return (
        <div className=" skills-body" id='skills-section'>
            {/* <div className='skills-title'>
                <h2>My Skills</h2>
            </div> */}
            <div className='skills-content'>
                <Row>
                    <Col sm={4}><div className='skills-imgBox'><Image src={html} className='skills-pic' /></div></Col>
                    <Col sm={4}><div className='skills-imgBox'><Image src={css} className='skills-pic' /></div></Col>
                    <Col sm={4}><div className='skills-imgBox'><Image src={javascript} className='skills-pic' /></div></Col>
                </Row>
                <Row>
                    <Col sm={4}><div className='skills-imgBox'><Image src={reactJs} className='skills-pic' /></div></Col>
                    <Col sm={4}><div className='skills-imgBox'><Image src={python} className='skills-pic' /></div></Col>
                    <Col sm={4}><div className='skills-imgBox'><Image src={java} className='skills-pic' /></div></Col>
                </Row>
                <Row>
                    <Col sm={4}><div className='skills-imgBox'><Image src={php} className='skills-pic' /></div></Col>
                    <Col sm={4}><div className='skills-imgBox'><Image src={visualBasic} className='skills-pic' /></div></Col>
                    <Col sm={4}><div className='skills-imgBox'><Image src={c} className='skills-pic' /></div></Col>
                </Row>
            </div>
        </div>
    //     <div className=" skills-body" id='skills-section'>
    //     {/* <div className='skills-title'>
    //         <h2>My Skills</h2>
    //     </div> */}
    //     {/* <div className='skills-content'> */}
    //            <Image src={html} className='skills-pic' />
    //             <Image src={css} className='skills-pic' />
    //             <Image src={javascript} className='skills-pic' />
    //             <Image src={reactJs} className='skills-pic' />
    //             <Image src={python} className='skills-pic' />
    //             <Image src={java} className='skills-pic' />
    //             <Image src={php} className='skills-pic' />
    //             <Image src={visualBasic} className='skills-pic' />
    //             <Image src={c} className='skills-pic' />
    //     {/* </div> */}
    // </div>
    );
}

export default Skills;