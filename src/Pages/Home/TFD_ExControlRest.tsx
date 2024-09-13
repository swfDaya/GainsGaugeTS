import './TFD_ExControlRest.css'

import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import TFD_RestTimer from './TFD_RestTimer';
import TFD_ExScroller from './TFD_ExScroller';

const TFD_ExControlRest = () => {

    const [ setOrRest, setSetOrRest ] = useState(true)

    return (
        <div
        className = 'home__body__center__ex__control__rest'
        >
            <div
            className = 'home__body__center__ex__control__rest__flip'
            >
                <ReactCardFlip
                isFlipped={setOrRest} 
                flipDirection="horizontal"
                >
                    <TFD_RestTimer />
                    <TFD_ExScroller />
                </ReactCardFlip>
            </div>
            <div
            className = 'home__body__center__ex__control__rest__flip__button to__center'
            onClick={() => setSetOrRest(setOrRest ? false : true) }
            >
                { setOrRest ? "Start Rest ?" : "Back to Workout ?" }
            </div>
        </div>
    )
}

export default TFD_ExControlRest
