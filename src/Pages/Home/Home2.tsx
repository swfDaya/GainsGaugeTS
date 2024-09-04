// import RestTimerModal from './RestTimerModal'
import { useRecoilState } from 'recoil'
import isRestTimerModalShowAtom from '../Recoil/Atom/ReactTimerModalAtom'

import {useState, useEffect, useRef} from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import left from './assets/chevrons-left.svg'
import right from './assets/chevrons-right.svg'
import './Home2.css'

const Home2 = () => {

    // recoil for rest timer modal
    // const [ isRestTimerModalShow, setIsRestTimerModalShow ] = useRecoilState(isRestTimerModalShowAtom)
    // const [ _, setIsRestTimerModalShow ] = useRecoilState(isRestTimerModalShowAtom)

    // const manageRestTimerModal = ( value: boolean ) => {
    //     if (value) {
    //         setIsRestTimerModalShow(true)
    //     }
    //     else {
    //         setIsRestTimerModalShow(false)
    //     }
    // }

    // rendertime for rest countdown
    const renderTime = ({ remainingTime }: { remainingTime: any }) => {
        const currentTime = useRef<number | null>(remainingTime);
        const prevTime = useRef<number | null>(null);
        const isNewTimeFirstTick = useRef<boolean>(false);
        const [, setOneLastRerender] = useState<any>(0);
      
        if (currentTime.current !== remainingTime) {
          isNewTimeFirstTick.current = true;
          prevTime.current = currentTime.current;
          currentTime.current = remainingTime;
        } else {
          isNewTimeFirstTick.current = false;
        }
      
        // force one last re-render when the time is over to tirgger the last animation
        if (remainingTime === 0) {
          setTimeout(() => {
            setOneLastRerender((val: number) => val + 1);
          }, 20);
        }
      
        const isTimeUp = isNewTimeFirstTick.current;
      
        return (
          <div className="time-wrapper">
            <div key={remainingTime as number} className={`time ${isTimeUp ? "up" : ""}`}>
              {remainingTime}
            </div>
            {prevTime.current !== null && (
              <div
                key={prevTime.current as number}
                className={`time ${!isTimeUp ? "down" : ""}`}
              >
                {prevTime.current}
              </div>
            )}
          </div>
        );
    };

    // countdown controls

    const [ inRest, setInRest ] = useState<boolean>(true)
    const restSwitch = () => {
        setInRest(
            (prev: boolean) => prev ? false : true
        )
    }

    const [ countDownKey, setCountDownKey ] = useState<any>(0)
    const onCountDownKeyChange = () => {
        setCountDownKey((prev: number) => prev + 1)
    }

    // const [ restTime, setRestTime ] = useState<number>(10)
    const [ restTime, _ ] = useState<number>(10)
    // const onRestTimeChange = ({ time }: { time: number }) => {
    //     setRestTime(
    //         (prev: number) => {
    //             if ( prev + time >= 0 ) {
    //                 return prev + time
    //             }
    //             else return prev
    //         }
    //     )
    // }

    useEffect(
        () => {
            onCountDownKeyChange()
        }, []
    )
  
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
                // className = {`home__body__center__clock__base ${isRestTimerModalShow ? "bg__filter" : ""} `}
                className = 'home__body__center__clock__base'
                >
                    <div
                    className = 'home__body__center__clock'
                    >
                        <div
                        className = 'home__body__center__clock__hour to__center'
                        >
                            01
                        </div>
                        <div
                        className = 'home__body__center__clock__separator to__center'
                        >
                            :
                        </div>
                        <div
                        className = 'home__body__center__clock__min to__center'
                        >
                            23
                        </div>
                        <div
                        className = 'home__body__center__clock__separator to__center'
                        >
                            :
                        </div>
                        <div
                        className = 'home__body__center__clock__sec to__center'
                        >
                            45
                        </div>
                    </div>
                    <div
                    className = 'home__body__center__clock__buttons'
                    >
                        <div
                        className = 'home__body__center__clock__buttons__pause to__center'
                        >
                            Pause
                        </div>
                        <div
                        className = 'home__body__center__clock__buttons__reset to__center'
                        >
                            Reset
                        </div>
                    </div>
                </div>
                <div
                // className = {`home__body__center__ex__base ${isRestTimerModalShow ? "bg__filter" : ""} `}
                className = 'home__body__center__ex__base'
                >
                    <div
                    className = 'home__body__center__ex__prev to__center'
                    >
                        <div
                        className = 'home__body__center__ex__prev__button to__center'
                        >
                            <img
                            src = {left}
                            />
                        </div>
                    </div>
                    <div
                    className = 'home__body__center__ex__name to__center'
                    >
                        3. Barbell Dumbell Bicep Curl
                    </div>
                    <div
                    className = 'home__body__center__ex__next to__center'
                    >
                        <div
                        className = 'home__body__center__ex__next__button to__center'
                        >
                            <img
                            src = {right}
                            />
                        </div>
                    </div>
                </div>
                <div
                // className = {`home__body__center__ex__details ${isRestTimerModalShow ? "bg__filter" : ""} `}
                className = 'home__body__center__ex__details'
                >
                    <div
                    className = 'home__body__center__ex__details__top'
                    >
                        <div
                        className = 'home__body__center__ex__details__top__left'
                        >
                            <div>set</div>
                            <div>weight</div>
                            <div>reps</div>
                        </div>
                        <div
                        className = 'home__body__center__ex__details__top__right'
                        >
                            <div
                            className = 'home__body__center__ex__details__top__right__details'
                            >
                                {
                                    Array.from({length: 4}, (_, index) => index).map(
                                        (_, index) => {
                                            return(
                                                <div
                                                key = {index}
                                                className = 'home__body__center__ex__details__top__right__details__each'
                                                >
                                                    <div>{index === 0 ? "W" : index}</div>
                                                    <div>{Math.floor(Math.random() * 7 + 7)}</div>
                                                    <div>{Math.floor(Math.random() * 20 + 12)}</div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div
                    className = 'home__body__center__ex__details__bottom to__center'
                    >
                        + Add Set
                    </div>
                </div>
                <div
                // className = {`home__body__center__rest__details ${isRestTimerModalShow ? "bg__filter" : ""} `}
                className = 'home__body__center__rest__details'
                >
                    <div
                    className = 'home__body__center__rest__countdown__base to__center'
                    >
                        <CountdownCircleTimer
                        key={countDownKey}
                        isPlaying={inRest}
                        duration={restTime}
                        colors={"#0D0D0D"}
                        onComplete={
                            () => {
                                restSwitch()
                                onCountDownKeyChange()
                                return { shouldRepeat: true }
                            }
                        }
                        >
                            {renderTime}
                        </CountdownCircleTimer>
                    </div>
                    <div
                    className = 'home__body__center__rest__buttons__base'
                    >
                        <div>+10</div>
                        <div>-10</div>
                        <div>+30</div>
                        <div>+30</div>
                    </div>
                    <div
                    className = 'home__body__center__rest__cta__base to__center'
                    >
                        Start Rest ?
                    </div>
                </div>
                {/* <div
                className = {`home__body__center__rest__base to__center ${isRestTimerModalShow ? "bg__filter" : ""} `}
                onClick={() => manageRestTimerModal(true)}
                >
                    Start Rest ?
                </div> */}
                <div
                // className = {`home__body__center__finish__base to__center ${isRestTimerModalShow ? "bg__filter" : ""} `}
                className = 'home__body__center__finish__base to__center'
                >
                    Finish Workout !
                </div>
            </div>
            <div
            className = 'home__body__right'
            >
            </div>
        </div>
    )
}

export default Home2
