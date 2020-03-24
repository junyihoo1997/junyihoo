import React, { useState, useEffect } from 'react';
import Baffle from "baffle-react";


// Styling import
import './Main.scss'

function Main(props) {
    const [obfuscate, setObfuscate] = useState(false);
    const [update, setUpdate] = useState(false);
    var title = ["Software Engineer", "Cloud Engineer", "Web Developer"]

    useEffect(() => {
        setInterval(function () {
            setObfuscate(false)
            setUpdate(false)
            setTime()
        }, 3000);
        function setTime() {
            setObfuscate(true)
            setUpdate(true)
        }

    });



    return (
        <div className='main-body' id='main-section'>
            <div className="main-opacity">
                <div className="main-content ">
                    <h1>
                        Hi, I'm Hoo Jun Yi
                        <br />
                        I'm a software engineer
                        {/* I am a <Baffle
                            speed={50}
                            characters="!@#$%^&*"
                            exclude={[" ", "!"]}
                            obfuscate={obfuscate}
                            update={update}
                            revealDuration={1000}
                            revealDelay={3}
                        >
                            {title[Math.floor(Math.random() * title.length)]}
                        </Baffle> */}
                    </h1>
                </div>
            </div>

        </div>

    );
}

export default Main;