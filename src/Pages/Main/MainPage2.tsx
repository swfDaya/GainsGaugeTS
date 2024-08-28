import React, { useEffect, useRef, useState } from 'react'
import './MainPage2.css'

import helm from './assets/helm2.png'
import play from './assets/play.svg'
import pause from './assets/pause.svg'
import stop from './assets/stop.svg'

const MainPage2 = () => {

    const [ currentEx, setCurrentEx ] = useState(1)

    const [ exScrollPos, setExScrollPos ] = useState(0)
    const exScrollRef = useRef(null)

    useEffect(
        () => {
            setCurrentEx( Math.floor(exScrollPos / (exScrollRef.current?.scrollWidth / 9)) + 1 )
        }, [exScrollPos]
    )

    return (
        <div
        className = 'main__page__base'
        >
            <div
            className = 'main__page__left'
            >
            
            </div>
            <div
            className = 'main__page__center'
            >
                <div
                className = 'main__page__center__ex__details__base to__center'
                >
                    <div
                    className = 'main__page__center__ex__details__container'
                    >
                        <div
                        className = 'main__page__center__ex__details__top'
                        >
                            <div
                            className = 'main__page__center__ex__details__top__set to__center'
                            >
                                Set
                            </div>
                            <div
                            className = 'main__page__center__ex__details__top__reps to__center'
                            >
                                Reps
                            </div>
                            <div
                            className = 'main__page__center__ex__details__top__weights to__center'
                            >
                                Weight
                            </div>
                        </div>
                        <div
                        className = 'main__page__center__ex__details__middle'
                        >
                            {
                                Array.from({length: 4}, (item, index) => index).map(
                                    (item, index) => {
                                        return(
                                            <div
                                            className = 'main__page__center__ex__details__middle__each__container'
                                            >
                                                <div
                                                className = 'main__page__center__ex__details__middle__each__set to__center'
                                                >
                                                    {index === 0 ? "W" : index}
                                                </div>
                                                <div
                                                className = 'main__page__center__ex__details__middle__each__reps to__center'
                                                >

                                                </div>
                                                <div
                                                className = 'main__page__center__ex__details__middle__each__weight to__center'
                                                >

                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div
                        className = 'main__page__center__ex__details__bottom to__center'
                        >
                            + Add Set
                        </div>
                    </div>
                </div>
                {/* <div
                className = 'main__page__center__ex__swipe_base to__center'
                >
                    <div
                    className = 'main__page__center__ex__swipe_container'
                    ref = {exScrollRef}
                    onScroll = {() => setExScrollPos(Math.floor(exScrollRef.current.scrollLeft))}
                    >
                        {
                            Array.from({length: 9}, (item, index) => index ).map(
                                (item, index) => {
                                    return(
                                        <div
                                        className = {`main__page__center__ex__swipe_container__each${index === 0 || index === 8 ? "__extreme" : "" } to__center`}
                                        >
                                            <div
                                            className = {`main__page__center__ex__swipe_container__each${index === 0 || index === 8 ? "__extreme" : index === currentEx ? "__current" : "" }__thumbnail to__center`}
                                            >
                                                {item}
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div> */}
                <div
                className = 'main__page__center__ex__name_base to__center'
                >
                    <div
                    className = 'main__page__center__ex__name_container to__center'
                    >
                        1. Barbell Bench Press
                    </div>
                </div>
                <div
                className = 'main__page__center__timer__base to__center'
                >
                    <div
                    className = 'main__page__center__timer__container'
                    >
                        <div
                        className = 'main__page__center__timer__top'
                        >
                            <div
                            className = 'main__page__center__timer__top__each to__center'
                            >
                                0
                            </div>
                            <div
                            className = 'main__page__center__timer__top__each to__center'
                            >
                                1
                            </div>
                            <div
                            className = 'main__page__center__timer__top__separator to__center'
                            >
                                ::
                            </div>
                            <div
                            className = 'main__page__center__timer__top__each to__center'
                            >
                                1
                            </div>
                            <div
                            className = 'main__page__center__timer__top__each to__center'
                            >
                                7
                            </div>
                            <div
                            className = 'main__page__center__timer__top__separator to__center'
                            >
                                ::
                            </div>
                            <div
                            className = 'main__page__center__timer__top__each to__center'
                            >
                                3
                            </div>
                            <div
                            className = 'main__page__center__timer__top__each to__center'
                            >
                                6
                            </div>
                        </div>
                        <div
                        className = 'main__page__center__timer__middle'
                        >
                            <div
                            className = 'main__page__center__timer__middle__pause to__center'
                            >
                                Pause
                            </div>
                            <div
                            className = 'main__page__center__timer__middle__end to__center'
                            >
                                Finish Up !
                            </div>
                        </div>
                        <div
                        className = 'main__page__center__timer__bottom'
                        >
                            <div
                            className = 'main__page__center__timer__bottom__button to__center'
                            >
                                Start REST ?
                            </div>
                        </div>
                    </div>
                </div>
                <div
                className = 'main__page__center__header__base to__center'
                >

                </div>
            </div>
            <div
            className = 'main__page__right'
            >
            
            </div>
        </div>
  )
}

export default MainPage2