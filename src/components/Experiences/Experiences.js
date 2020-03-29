import React from 'react';
import './Experiences.scss'

// Image import
import spade from '../../pictures/3spade.PNG';
import animeForum from '../../pictures/animeForum.PNG';
import sideProject1 from '../../pictures/sideproject1.PNG'
import sideProject2 from '../../pictures/sideproject2.PNG'
import parkingManagementSystem from '../../pictures/parkingManagementSystem.PNG'
import universityTimetableSystem from '../../pictures/universityTimetableSystem.PNG'


function Experiences(props) {
    const data = [
        { imageSrc: spade, title: "Musician portal", description: "A portal for musicians, studio owners and sponsers for contributing music industry.", livePreview: "https://www.3spade.com/" }, 
        { imageSrc: animeForum, title: "Anime Static Website", description: "Anime Static Website with hard-coded content", livePreview: "https://kyoronz.github.io/Anime-Website-Static/Anime.html", sourceCode: "https://github.com/junyihoo1997/Anime-Static-Website" },
        { imageSrc: sideProject1, title: "Side Job Static Website", description: "Simple side job website", livePreview: "https://junyihoo1997.github.io/static-sidejob-sk/", sourceCode: "https://github.com/junyihoo1997/static-sidejob-sk" },
        { imageSrc: sideProject2, title: "Side Job Static Website", description: "Simple side job website", livePreview: "https://junyihoo1997.github.io/static-sidejob-dp/", sourceCode: "https://github.com/junyihoo1997/static-sidejob-dp" },
        { imageSrc: parkingManagementSystem, title: "Parking Management System", description: "Application that allow user to manage parking.",sourceCode: "https://github.com/junyihoo1997/Parking_Management_System" },
        { imageSrc: universityTimetableSystem, title: "University Timetable Management System", description: "Application that allow students, lecturer and admin to manage timetable for university.", sourceCode: "https://github.com/junyihoo1997/University_Consultation_Schedule_Management_System" },
    ]
    // var obj = JSON.parse(data);
    // console.log(Object.keys(obj).length)
    return (
        <div className='experiences-body' id='experiences-section'>
 <div className="experiences-card-body">
            {data.map(item => {
                return (
                   
                    <div class="card experiences-card" >
                        <img class="card-img-top" src={item.imageSrc} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.description}</p>
                        </div>
                        <div class="card-body">
                            {item.livePreview ? <a href={item.livePreview} class="card-link" target="_blank">Live Preview</a> : "" }
                            {item.sourceCode ? <a href={item.sourceCode} target="_blank" class="card-link">Source Code</a> : ""}
                        </div>
                    </div>
                );
            })}
                    </div>




        </div>
    );
}

export default Experiences;