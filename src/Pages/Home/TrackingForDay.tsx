// import {useState, useEffect, useRef} from 'react';
// import { CountdownCircleTimer } from "react-countdown-circle-timer";

// import left from './assets/chevrons-left.svg'
// import right from './assets/chevrons-right.svg'
import './TrackingForDay.css'

// import ReactCardFlip from 'react-card-flip';

import TFD_Stopwatch from './TFD_Stopwatch';
import TFD_ExBase from './TFD_ExBase';
import TFD_ExDetails from './TFD_ExDetails';
import TFD_ExControlRest from './TFD_ExControlRest';


const TrackingForDay = () => {
    return (
        <div
        className = 'home__base'
        >
            <div
            className = 'home__body__left'
            >
            </div>
            <div
            className = 'home__body__center'
            >
                <div
                className = 'home__body__center__grid'
                >
                    <TFD_Stopwatch />
                    <TFD_ExBase />
                    <TFD_ExDetails />
                    <TFD_ExControlRest />
                    <div
                    className = 'home__body__center__finish__base to__center'
                    >
                        Finish Workout !
                    </div>
                </div>
            </div>
            <div
            className = 'home__body__right'
            >
            </div>
        </div>
    )
}

export default TrackingForDay
