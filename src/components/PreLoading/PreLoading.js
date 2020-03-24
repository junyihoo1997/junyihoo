

// import React, { Component } from 'react';
// import $ from 'jquery'
// import Pace from 'pace-js'

// // Styling Import
// import './PreLoading.scss'

// class PreLoading extends Component {
//     componentDidMount = () => {
//         paceOptions = {
//             ajax: true,
//             document: true,
//             eventLag: false
//             };
    
//             Pace.on('done', function() {
//             $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));
    
    
//             $('#preloader').delay(1500).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));
    
//             TweenMax.from(".title", 2, {
//                  delay: 1.8,
//                       y: 10,
//                       opacity: 0,
//                       ease: Expo.easeInOut
//                 })
//            });
//     }
//     render() {
//         return (
//             <div className='preloading-body'>

//             <h1 class="title">HOO JUN YI</h1>

//             <div id="preloader">
//                 <div class="p">LOADING</div>
//             </div>

//         </div>
//         );
//     }
// }

// export default PreLoading;