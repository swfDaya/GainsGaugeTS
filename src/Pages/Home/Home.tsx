import { useEffect, useRef, useState } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import './Home.css'

const Home = () => {

    // home page ref
    const homePageRef = useRef<HTMLDivElement>(null)

    // rep scroll controls
    const [ selectedRep, setSelectedRep ] = useState<any>(10)
    const scrollRepRef = useRef<HTMLDivElement>(null)
    const scrollRepRefEach = useRef<HTMLDivElement>([])

    const onRepScroll = () => {
        if (scrollRepRef.current) {
            setSelectedRep(Math.ceil(scrollRepRef.current.scrollTop/scrollRepRef.current.scrollHeight * 52)+1)
        }
    }

    // weight scroll controls
    const [ selectedWeight, setSelectedWeight ] = useState<any>(33)
    const scrollWeightRef = useRef<HTMLDivElement>(null)
    const scrollWeightRefEach = useRef<HTMLDivElement>([])

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
                    scrollRepRefEach.current[selectedRep].scrollIntoView()
                }, 500
            )
            setTimeout(
                () => {
                    scrollWeightRefEach.current[selectedWeight].scrollIntoView()
                }, 2000
            )
        }, []
    )

    // rendertime for rest countdown
    const renderTime = ({ remainingTime }: { remainingTime: any }) => {
        const currentTime = useRef<HTMLDivElement>(remainingTime);
        const prevTime = useRef<HTMLDivElement>(null);
        const isNewTimeFirstTick = useRef<HTMLDivElement>(false);
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
            setOneLastRerender((val) => val + 1);
          }, 20);
        }
      
        const isTimeUp = isNewTimeFirstTick.current;
      
        return (
          <div className="time-wrapper">
            <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
              {remainingTime}
            </div>
            {prevTime.current !== null && (
              <div
                key={prevTime.current}
                className={`time ${!isTimeUp ? "down" : ""}`}
              >
                {prevTime.current}
              </div>
            )}
          </div>
        );
    };

    // countdown controls

    const [ inRest, setInRest ] = useState<any>(false)
    const restSwitch = () => {
        setInRest(
            (prev) => prev ? false : true
        )
    }

    const [ restTime, setRestTime ] = useState<any>(10)
    const onRestTimeChange = ({ time }: { time: any }) => {
        setRestTime(
            (prev) => {
                if ( prev + time >= 0 ) {
                    return prev + time
                }
                else return prev
            }
        )
    }

    const [ countDownKey, setCountDownKey ] = useState<any>(0)
    const onCountDownKeyChange = () => {
        setCountDownKey((prev) => prev + 1)
    }

    // set, reps, weight control
    const [currentSet, setCurrentSet] = useState<any>(0)

    const onSetSelect = ({ index }: { index: any }) => {
        setCurrentSet(index)
    }
  
    return (
        <div
        className = 'home__base'
        >
        <div
        className = 'home__header'
        >

        </div>
        <div
        className = 'home__body'
        >
            <div
            className = 'home__body__left'
            >
            </div>
            <div
            className = 'home__body__center'
            >
                <div
                className = 'home__body__center__container'
                ref = {homePageRef}
                >
                    <div
                    className = 'home__body__center__closure__base'
                    >
                        <div
                        className = 'home__body__center__closure__minimize'
                        >
                            Minimize
                        </div>
                        <div
                        className = 'home__body__center__closure__finish'
                        >
                            Finish Workout
                        </div>
                    </div>
                    <div
                    className = 'home__body__center__timer__base'
                    >
                        <div
                        className = 'home__body__center__timer__container'
                        >
                            <div
                            className = 'home__body__center__timer__hour to__center'
                            >
                                01
                            </div>
                            <div
                            className = 'home__body__center__timer__separator to__center'
                            >
                                :
                            </div>
                            <div
                            className = 'home__body__center__timer__min to__center'
                            >
                                23
                            </div>
                            <div
                            className = 'home__body__center__timer__separator to__center'
                            >
                                :
                            </div>
                            <div
                            className = 'home__body__center__timer__sec to__center'
                            >
                                45
                            </div>
                        </div>
                        <div
                        className = 'home__body__center__timer__pause to__center'
                        >
                            Pause
                        </div>
                    </div>
                    <div
                    className = 'home__body__center__ex__details__base'
                    >
                        <div
                        className = 'home__body__center__ex__details__header'
                        >
                            <div>s.no.</div>
                            <div>reps</div>
                            <div>weight</div>
                        </div>
                        <div
                        className = 'home__body__center__ex__details__scroll'
                        >
                            {
                                Array.from({length: 4}, (_, index) => index).map(
                                    (_, index) => {
                                        return(
                                            <div
                                            key = {index}
                                            className = 'home__body__center__ex__details__scroll__each'
                                            style={{
                                                borderBottom: index === 3 ? "" : "0.25px solid #a1a6b1",
                                                backgroundColor: index === currentSet ? "#0588F8" : "",
                                                color: index === currentSet ? "white" : "black"
                                            }}
                                            onClick={() => onSetSelect(index)}
                                            >
                                                <div
                                                className = 'home__body__center__ex__details__scroll__each__sno to__center'
                                                >
                                                    {index === 0 ? "w" : index}
                                                </div>
                                                <div
                                                className = 'home__body__center__ex__details__scroll__each__reps to__center'
                                                >
                                                    {Math.floor(Math.random() * 7 + 7)}
                                                </div>
                                                <div
                                                className = 'home__body__center__ex__details__scroll__each__weight to__center'
                                                >
                                                    {Math.floor(Math.random() * 20 + 12)}
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div
                        className = 'home__body__center__ex__details__footer to__center'
                        >
                            + Add Set
                        </div>
                    </div>
                    <div
                    className = 'home__body__center__rest__base'
                    style={{
                        display: inRest ? "grid" : "none"
                    }}
                    >
                        <div
                        className = 'home__body__center__rest__container'
                        >
                            <div
                            className = 'home__body__center__rest__clock to__center'
                            >
                                <CountdownCircleTimer
                                key={countDownKey}
                                isPlaying={inRest}
                                duration={restTime}
                                colors={"#0588F8"}
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
                            className = 'home__body__center__rest__buttons'
                            >
                                <div
                                className = 'home__body__center__rest__buttons__10__plus to__center'
                                onClick={() => onRestTimeChange(10)}
                                >
                                    + 10
                                </div>
                                <div
                                className = 'home__body__center__rest__buttons__10__minus to__center'
                                onClick={() => onRestTimeChange(-10)}
                                >
                                    - 10
                                </div>
                                <div
                                className = 'home__body__center__rest__buttons__30__plus to__center'
                                onClick={() => onRestTimeChange(30)}
                                >
                                    + 30
                                </div>
                                <div
                                className = 'home__body__center__rest__buttons__30__minus to__center'
                                onClick={() => onRestTimeChange(-30)}
                                >
                                    - 30
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                    className = 'home__body__center__rest__button__base to__center'
                    onClick = {() => {
                        restSwitch()
                        onCountDownKeyChange()
                    }}
                    >
                        {inRest ? "End Rest ?" : "Start Rest ?"}
                    </div>
                    <div
                    className = 'home__body__center__control__base'
                    >
                        <div
                        className = 'home__body__center__control__reps to__center'
                        >
                            reps
                        </div>
                        <div
                        className = 'home__body__center__control__reps__scroll'
                        ref = {scrollRepRef}
                        onScroll={onRepScroll}
                        >
                            {
                                Array.from({length: 52}, (_, index) => index).map(
                                    (_, index) => {
                                        return(
                                            <div
                                            className = {`home__body__center__control__reps__scroll__each${index === selectedRep ? "__select" : "__unselect"} to__center`}
                                            key = {index}
                                            ref = {(el) => scrollRepRefEach.current[index] = el}
                                            style={{
                                                visibility: index === 0 || index === 51 ? "hidden" : "visible"
                                            }}
                                            >
                                                {index}
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div
                        className = 'home__body__center__control__weight__scroll'
                        ref = {scrollWeightRef}
                        onScroll={onWeightScroll}
                        >
                            {
                                Array.from({length: 202}, (_, index) => index).map(
                                    (_, index) => {
                                        return(
                                            <div
                                            className = {`home__body__center__control__weight__scroll__each${index === selectedWeight ? "__select" : "__unselect"} to__center`}
                                            key = {index}
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
                        <div
                        className = 'home__body__center__control__weight to__center'
                        >
                            kg
                        </div>
                    </div>
                    <div
                    className = 'home__body__center__control__buttons__base'
                    >
                        <div
                        className = 'home__body__center__control__buttons__reset to__center'
                        >
                            Reset
                        </div>
                        <div
                        className = 'home__body__center__control__buttons__submit to__center'
                        >
                            Submit
                        </div>
                    </div>
                </div>
            </div>
            <div
            className = 'home__body__right'
            >

            </div>
        </div>
        </div>
    )
}

export default Home
