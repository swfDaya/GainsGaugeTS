import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {useState, useEffect, useRef} from 'react';

import './TFD_RestTimer.css'

const TFD_RestTimer = () => {

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
                <div>+ 10 s</div>
                <div>- 10 s</div>
                <div>+ 30 s</div>
                <div>- 30 s</div>
            </div>
        </div>
    )
}

export default TFD_RestTimer
