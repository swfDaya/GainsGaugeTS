import React, {useState, useRef, useEffect} from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import './RestTimerModal.css'

// const RestTimerModal = ({manageRestTimerModal}:{manageRestTimerModal: (value: boolean) => void}) => {
const RestTimerModal = () => {

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

    const [ restTime, setRestTime ] = useState<number>(10)
    const onRestTimeChange = ({ time }: { time: number }) => {
        setRestTime(
            (prev: number) => {
                if ( prev + time >= 0 ) {
                    return prev + time
                }
                else return prev
            }
        )
    }

    useEffect(
        () => {
            onCountDownKeyChange()
        }, []
    )

    return (
        <div
        className = 'rest__timer__modal__base'
        >
            <div
            className = 'home__body__center__rest__clock to__center'
            >
                <CountdownCircleTimer
                key={countDownKey}
                isPlaying={inRest}
                duration={restTime}
                colors={"#FEE1B6"}
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
                onClick={() => onRestTimeChange({ time: 10 })}
                >
                    + 10
                </div>
                <div
                className = 'home__body__center__rest__buttons__10__minus to__center'
                onClick={() => onRestTimeChange({ time: -10 })}
                >
                    - 10
                </div>
                <div
                className = 'home__body__center__rest__buttons__30__plus to__center'
                onClick={() => onRestTimeChange({ time: 30 })}
                >
                    + 30
                </div>
                <div
                className = 'home__body__center__rest__buttons__30__minus to__center'
                onClick={() => onRestTimeChange({ time: -30 })}
                >
                    - 30
                </div>
            </div>
            <div
            className = 'home__body__center__back to__center'
            // onClick={() => manageRestTimerModal(false)}
            >
                Back to Work ?
            </div>
        </div>
    )
}

export default RestTimerModal
