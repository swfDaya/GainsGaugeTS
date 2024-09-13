// import RestTimerModal from './RestTimerModal'
// import { useRecoilState } from 'recoil'
// import isRestTimerModalShowAtom from '../Recoil/Atom/ReactTimerModalAtom'

import {useState, useEffect, useRef} from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import left from './assets/chevrons-left.svg'
import right from './assets/chevrons-right.svg'
import './Home2.css'

import ReactCardFlip from 'react-card-flip';

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

    // rest scroll flip controls
    const [ selectedRep, setSelectedRep ] = useState<any>(25)
    const scrollRepRef = useRef<HTMLDivElement>(null)
    const scrollRepRefEach = useRef<(HTMLDivElement | null)[]>([])
    const onRepScroll = () => {
        if (scrollRepRef.current) {
            setSelectedRep(Math.ceil(scrollRepRef.current.scrollLeft/scrollRepRef.current.scrollWidth * 52)+1)
        }
    }

    const [ selectedWeight, setSelectedWeight ] = useState<any>(33)
    const scrollWeightRef = useRef<HTMLDivElement>(null)
    const scrollWeightRefEach = useRef<(HTMLDivElement | null)[]>([])

    const onWeightScroll = () => {
        if (scrollWeightRef.current) {
            setSelectedWeight(Math.ceil(scrollWeightRef.current.scrollTop/scrollWeightRef.current.scrollHeight * 202)+1)
        }
    }

    // scroll on page load
    useEffect(
        () => {
            setTimeout(
                () => {
                    scrollRepRefEach.current[selectedRep as number]!.scrollIntoView()
                }, 1000
            )
            // setTimeout(
            //     () => {
            //         scrollWeightRefEach.current[selectedWeight as number]!.scrollIntoView()
            //     }, 2000
            // )
        }, []
    )

    const [ setOrRest, setSetOrRest ] = useState(true)
  
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
                    className = 'home__body__center__rest__details__top'
                    // className = {`home__body__center__rest__details__top__${setOrRest ? "rest" : "set"}`}
                    >
                        <ReactCardFlip
                        isFlipped={setOrRest} 
                        flipDirection="horizontal"
                        >
                            <div
                            className = 'home__body__center__rest__details__top__rest'
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
                            </div>
                            <div
                            className = 'home__body__center__rest__details__top__set'
                            >
                                <div
                                className = 'home__body__center__scroll__top'
                                >
                                    <div
                                    className = 'home__body__center__scroll__top__content to__center'
                                    >
                                        reps {selectedRep}
                                    </div>
                                    <div
                                    className = 'home__body__center__scroll__top__scroll'
                                    >
                                        {/* <div
                                        className = 'home__body__center__scroll__top__scroll__top to__center'
                                        >
                                            <div className = 'home__body__center__scroll__top__scroll__top__block' ></div>
                                        </div> */}
                                        <div
                                        className = 'home__body__center__scroll__top__scroll__container'
                                        ref = {scrollRepRef}
                                        onScroll={onRepScroll}
                                        >
                                            {
                                                Array.from({length: 52}, (_, index) => index).map(
                                                    (_, index) => {
                                                        return(
                                                            <div
                                                            className = 'home__body__center__scroll__top__scroll__container__each to__center'
                                                            style={{
                                                                fontWeight: index === selectedRep ? "bold" : "",
                                                                color: index === selectedRep ? "#0588F8" : "black",
                                                                fontSize: index === selectedRep ? "2rem" : "1rem"
                                                            }}
                                                            ref = {(el) => scrollRepRefEach.current[index] = el}
                                                            >
                                                                {index}
                                                            </div>
                                                        )
                                                    }
                                                )
                                            }
                                        </div>
                                        {/* <div
                                        className = 'home__body__center__scroll__top__scroll__bottom to__center'
                                        >
                                            <div className = 'home__body__center__scroll__top__scroll__bottom__block' ></div>
                                        </div> */}
                                    </div>
                                </div>
                                <div
                                className = 'home__body__center__scroll__bottom'
                                >
                                    <div
                                    className = 'home__body__center__scroll__bottom__content to__center'
                                    >
                                        kg
                                    </div>
                                    <div
                                    className = 'home__body__center__scroll__top__scroll'
                                    >
                                        {/* <div
                                        className = 'home__body__center__scroll__top__scroll__top to__center'
                                        >
                                            <div className = 'home__body__center__scroll__top__scroll__top__block' ></div>
                                        </div> */}
                                        <div
                                        className = 'home__body__center__scroll__bottom__scroll__container'
                                        ref = {scrollWeightRef}
                                        onScroll={onWeightScroll}
                                        >
                                            {
                                                Array.from({length: 202}, (_, index: number) => index).map(
                                                    (_, index) => {
                                                        return(
                                                            <div
                                                            className = {`home__body__center__control__weight__scroll__each${index === selectedWeight ? "__select" : "__unselect"} to__center`}
                                                            key = {index as number}
                                                            ref = {(el) => scrollWeightRefEach.current[index] = el}
                                                            style={{
                                                                visibility: index === 0 || index === 201 ? "hidden" : "visible"
                                                            }}
                                                            >
                                                                {index * 0.25}
                                                            </div>
                                                        )
                                                    }
                                                )
                                            }
                                            
                                        </div>
                                        {/* <div
                                        className = 'home__body__center__scroll__top__scroll__bottom to__center'
                                        >
                                            <div className = 'home__body__center__scroll__top__scroll__bottom__block' ></div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </div>
                    <div
                    className = 'home__body__center__rest__cta__base to__center'
                    onClick={() => setSetOrRest(setOrRest ? false : true) }
                    >
                        { setOrRest ? "Start Rest ?" : "Back to Workout ?" }
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
