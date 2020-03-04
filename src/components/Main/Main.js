import React, { useState, useEffect } from 'react';
import Baffle from "baffle-react";

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
        function setTime(){
            setObfuscate(true)
            setUpdate(true)
        }
    
    });

    

    return (
        <div className="container main-body">
            <Baffle
                speed={50}
                characters="!@#$%^&*"
                exclude={[" ", "!"]}
                obfuscate={obfuscate}
                update={update}
                revealDuration={1000}
                revealDelay={0}
            >
                {title[Math.floor(Math.random() * title.length)]}
            </Baffle>
            Main
        </div>
    );
}

export default Main;